import { View, Text, ScrollView } from 'react-native';
import BotaoAcao from '../componentes/botao/acao';

export default function FeedSocial() {
 return (
    <ScrollView className='flex-1 py-4 px-16'>
        <View className='flex-row'>
          <View className='h-32 flex-1 bg-zinc-100 m-2 rounded-2xl border border-slate-300'></View>
          <View className='h-32 flex-1 bg-zinc-100 m-2 rounded-2xl border border-slate-300'></View>
          <View className='h-32 flex-1 bg-zinc-100 m-2 rounded-2xl border border-slate-300'></View>
        </View>
        <View className='w-full bg-zinc-100 m-2 rounded-2xl border border-slate-300'>
          <BotaoAcao label="No que você está pensando?"/>
        </View>
    </ScrollView>
  );
}