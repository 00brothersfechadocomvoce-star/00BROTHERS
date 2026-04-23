import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
interface CabecalhoProps {
  label: string
  onPress?: () => void
  icon: "arrow-back" 
}

export default function Cabecalho({label, onPress, icon}: CabecalhoProps) {
 return (
   <View className='flex-row justify-between p-3 border border-b-slate-500 items-center'>
        <View>
          <Text className='text-3xl font-bold'>{label}</Text>
        </View>
        {onPress && (
          <TouchableOpacity onPress={onPress} className='w-10 h-10 rounded-full border border-slate-300' activeOpacity={0.8}>
            <Ionicons name={icon} size={24} color="black" />
          </TouchableOpacity>
        )}
   </View>
  );
}