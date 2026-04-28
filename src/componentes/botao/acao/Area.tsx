import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

export default function Area() {
  const [height, setHeight] = useState(45); // Altura inicial

  return (
    <View className='py-2 px-4'>
      <TextInput className='w-full border border-slate-300 active:border-yellow-400 active:border-2 rounded-2xl' multiline={true} onContentSizeChange={(event) => {setHeight(event.nativeEvent.contentSize.height); }} style={{padding: 16, height: Math.max(45, height) }} placeholder="Digite aqui..."/>

    </View>
  );
}