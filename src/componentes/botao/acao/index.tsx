import { Text, TouchableOpacity } from 'react-native';
import Area from './Area';

interface BotaoAcaoProps { 
    label: string;
    funcao: () => void;
}


export default function BotaoAcao({label}: BotaoAcaoProps) {
 return (
   <TouchableOpacity className='rounded-2xl bg-white m-4 border border-slate-300 hover:border-yellow-400 transition justify-center py-2 px-4' activeOpacity={0.8}>
        <Text className={`text-lg font-bold text-slate-800`}>{label}</Text>
   </TouchableOpacity>
  );
}