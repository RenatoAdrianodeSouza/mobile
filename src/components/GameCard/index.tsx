import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...res }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...res}>
      <ImageBackground 
        style={styles.cover}
        source={data.cover}
      >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
          >
          <text style={styles.name}>
            {data.name}
          </text>

          <text style={styles.ads}>
            {data.ads} anúncios
          </text>          
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}