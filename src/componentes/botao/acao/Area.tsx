import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

export default function Area() {
  const [height, setHeight] = useState(50);

  return (
    <View className='py-2 px-4'>
      <TextInput className='w-full border border-slate-300 hover:border-yellow-400 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 hover:border-2 rounded-2xl transition' multiline={true} onContentSizeChange={(event) => {setHeight(event.nativeEvent.contentSize.height); }} style={{padding: 16, height: Math.max(50, height) }} placeholder="Digite aqui..."/>
    </View>
  );
}