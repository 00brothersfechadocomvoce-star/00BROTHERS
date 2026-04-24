import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import Localizacao from '../Localizacao';
interface CabecalhoProps {
  label: string
  onPress?: () => void
  icon: "arrow-back" | "home" 
}

export default function Cabecalho({label, onPress, icon}: CabecalhoProps) {
 return (
   <View className='flex-row justify-between p-3 border border-b-slate-500 items-center'>
        <View className='flex-row gap-2 justify-center'>
          <Text className='text-3xl font-bold '>{label}</Text>
          <Localizacao />
        </View>
        {onPress && (
          <TouchableOpacity onPress={onPress} className='w-10 h-10 rounded-full border border-slate-300 justify-center items-center' activeOpacity={0.8}>
            <Ionicons name={icon} size={24} color="black" />
          </TouchableOpacity>
        )}
   </View>
  );
}