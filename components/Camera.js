import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform , TextInput, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator  from 'expo-image-manipulator'
import * as MediaLibrary from 'expo-media-library';
import { baseUrl } from '../shared/baseUrl'
import {IMAGES} from '../shared/imagesObj';

export default function Camera() {
  const [image, setImage] = useState([]);
  const [imageTest, setImageTest] = useState(null);
  const [text, onChangeText] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera permissions to make this work!');
        }
      }
    })();
  }, []);
  
  
  
  useEffect(() => {
	fetch(baseUrl + 'images')
			.then((response) => response.json())
			.then((data) => {
				setImage(data) // new
			})
      .catch((error) => {
        console.error('Error:', error);
      });
	}, [])


  processImage = async (imgUri) => {
    const processedImage = await ImageManipulator.manipulateAsync(
       imgUri,
       [{ resize: { width: 400 }}],
       {  format: 'png' }
     ).catch(error => {
      console.log('post comment', error.message);
      alert('Your comment could not be posted\nError: ' + error.message);
  });  
     //this.setState({imageUrl: processedImage.uri});
     console.log(processedImage)
   };


  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
    });

  
    if (!result.cancelled) {
      
      
      const cachedAsset = await MediaLibrary.createAssetAsync(result.uri);
      
      const albumName = "findit";
      const album = await MediaLibrary.getAlbumAsync(albumName)
      
      if(album){
        await MediaLibrary.addAssetsToAlbumAsync([cachedAsset], album, false);
      }else{
        const asset = await MediaLibrary.createAssetAsync(result.uri);
        await MediaLibrary.createAlbumAsync(albumName, asset);
      }
    

      const obj = {id: image.length, src: result.uri, themeTag:["Cat"]
      };
      const newArr =[...image, obj]; 
      setImage(newArr);
      setImageTest(newArr[image.length].src);
      return fetch(baseUrl + 'images', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    //.then(response => response.json())
    //.then(response => (addComment(response)))
    .catch(error => {
        console.log('post comment', error.message);
        alert('Your comment could not be posted\nError: ' + error.message);
    });
  }
      
    
      
    
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: imageTest }} style={{ width: 100, height: 100 }} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="add Theme"
      />
      <Button title="Add image from Camera" onPress={pickImage} />
      
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

