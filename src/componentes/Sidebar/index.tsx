import { View, FlatList, Text } from 'react-native';
import { Secoes } from '../../consts/Secoes';
import Opcao from './Opcao';
import { useState } from 'react';


const data = Secoes

export default function Sidebar() {
  const [ativo, setAtivo] = useState<string | null>(data[0]?.label);

  return (
   <View className="flex-1 border border-r-slate-300 w-1/5">
      <FlatList
         data={data}
         renderItem={({ item }) => <Opcao label={item.label} icon={item.icon} selecionado={ativo === item.label} onPress={() => setAtivo(item.label)}/>}
         keyExtractor={(item) => item.toString()}
         contentContainerStyle={{ paddingVertical: 20 }}
       />
   </View>
  );
}