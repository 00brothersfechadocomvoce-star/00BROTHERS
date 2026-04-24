import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Localizacao() {
 return (
   <View className='border border-yellow-500 bg-yellow-200/20 flex-row items-center gap-2 rounded-xl px-3 p-1'>
        <Ionicons name="location-outline" size={22} color="#eab308" />
        <Text className='text-yellow-500 font-bold'>Cidade, Estado</Text>
   </View>
  );
}