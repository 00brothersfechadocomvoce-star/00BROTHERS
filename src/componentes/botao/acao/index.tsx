import { Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Area from './Area';

interface BotaoAcaoProps {
  label: string;
}

export default function BotaoAcao({ label }: BotaoAcaoProps) {
  const [AreaVisivel, setAreaVisivel] = useState(false);

  function ClicarArea() {
    setAreaVisivel(!AreaVisivel);
  }

  return (
    <>
      {AreaVisivel ? (
        <Area />
      ) : (
        <TouchableOpacity 
          className='rounded-2xl bg-white border border-slate-300 justify-center py-2 px-4' 
          activeOpacity={0.8} 
          onPress={ClicarArea}
        >
          <Text className='text-lg font-bold text-slate-800'>{label}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}