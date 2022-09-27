import React from 'react';
import { View, Image } from 'react-native';

import { logoImg } from '../../src/assets/logo-nlw-esports.png';
import { Heading } from '../../Heading';


import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <Heading 
      title="Encontre seu duo!"
      subtitle="Selecione o game que desja jogar..."
      />

    </View>
  );
}