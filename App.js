import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App () {
  return (
    <>
      <LinearGradient
        colors={['#4e0329', '#ddb52f']}
        style={styles.app}
      >
        <ImageBackground
          style={styles.imageBackground}
          imageStyle={styles.image}
          source={require('./assets/background.png')}
          resizeMode='cover'
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>

      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flexGrow: 1,
  },
  imageBackground: {
    flexGrow: 1,
  },
  image: {
    opacity: 0.15,
  },
});
