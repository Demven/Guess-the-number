import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import colors from './constants/colors';

export default function App () {
  const [userNumber, setUserNumber] = useState();
  const [roundsNumber, setRoundsNumber] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  function onStartGame (number) {
    setUserNumber(Number(number));
    setGameOver(false);
  }

  function onStartNewGame () {
    setUserNumber(undefined);
    setRoundsNumber(0);
  }

  function onGameOver (numberOfRounds) {
    setGameOver(true);
    setRoundsNumber(numberOfRounds);
  }

  const screen = userNumber
    ? gameOver
      ? <GameOverScreen
          userNumber={userNumber}
          roundsNumbers={roundsNumber}
          onStartNewGame={onStartNewGame}
        />
      : <GameScreen
        userNumber={userNumber}
        onGameOver={onGameOver}
      />
    : <StartGameScreen onStartGame={onStartGame} />;

  return (
    <>
      {!fontsLoaded && (<AppLoading />)}

      {fontsLoaded && (
        <LinearGradient
          colors={[colors.primary700, colors.accent500]}
          style={styles.app}
        >
          <ImageBackground
            style={styles.imageBackground}
            imageStyle={styles.image}
            source={require('./assets/images/background.png')}
            resizeMode='cover'
          >
            <SafeAreaView style={styles.screenContainer}>
              {screen}
            </SafeAreaView>
          </ImageBackground>
        </LinearGradient>
      )}

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
