import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import colors from './constants/colors';

export default function App () {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

  function onStartGame (number) {
    setUserNumber(number);
    setGameOver(false);
  }

  const screen = userNumber
    ? gameOver
      ? <GameOverScreen onGameOver={() => setGameOver(true)} />
      : <GameScreen userNumber={userNumber} />
    : <StartGameScreen onStartGame={onStartGame} />;

  return (
    <>
      <LinearGradient
        colors={[colors.primary700, colors.accent500]}
        style={styles.app}
      >
        <ImageBackground
          style={styles.imageBackground}
          imageStyle={styles.image}
          source={require('./assets/background.png')}
          resizeMode='cover'
        >
          <SafeAreaView style={styles.screenContainer}>
            {screen}
          </SafeAreaView>
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
  screenContainer: {
    flexGrow: 1,
  },
});
