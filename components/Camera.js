import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {IMAGES} from '../shared/imagesObj';

export default function Camera() {
  const [image, setImage] = useState(IMAGES);
  const [imageTest, setImageTest] = useState();

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

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    console.log(result);

    if (!result.cancelled) {
      const obj = {id: image.length, src: 'data:image/png;base64,' + result.base64, themeTag:["Cat"]
      };
      const newArr =[...image, obj]; 
      setImage(newArr);
      setImageTest(newArr[image.length].src);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: imageTest }} style={{ width: 100, height: 100 }} />
      
      <Button title="Add image from Camera" onPress={pickImage} />
      
    </View>
  );
}

