import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface OpcaoProps {
    label: string
    icon: any
    onPress?: () => void
    selecionado?: boolean
}

export default function Opcao({label, icon, onPress, selecionado}: OpcaoProps) {

 return (
   <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        { selecionado ? (
            <View className='h-10 mx-3 m-0.5 rounded-2xl bg-yellow-500 flex-row gap-2 items-center p-4 hover:bg-yellow-400 hover:scale-105 transition'>
                <Ionicons name={icon} size={20} color="white" />
                <Text className='text-sm font-semibold text-white'>{label}</Text>
            </View>
        ) : (
            <View className='h-10 mx-3 m-0.5 flex-row rounded-2xl gap-2 items-center p-4 hover:bg-white hover:scale-105 transition'>
                <Ionicons name={icon} size={20} color="black" />
                <Text className='text-sm font-semibold text-slate-800'>{label}</Text>
            </View>
        )}
   </TouchableOpacity>
  );
}