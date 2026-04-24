import { View, FlatList, Text } from 'react-native';
import { Secoes } from '../../consts/Secoes';
import Opcao from './Opcao';
import { useState } from 'react';

interface SidebarProps {
  secaoAtiva: string | null;
  onSelecionarSecao: (secao: string) => void;
}

export default function Sidebar({ secaoAtiva, onSelecionarSecao }: SidebarProps) {
  return (
   <View className="border border-r-slate-300 w-1/5 h-full">
      <FlatList
         data={Secoes}
         renderItem={({ item }) => <Opcao label={item.label} icon={item.icon} selecionado={secaoAtiva === item.label} onPress={() => onSelecionarSecao(item.label)}/>}
         keyExtractor={(item) => item.label}
         contentContainerStyle={{ paddingVertical: 20 }}
       />
   </View>
  );
}