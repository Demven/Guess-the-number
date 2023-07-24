import { useState, useEffect } from 'react';
import {
  Text,
  Alert,
  View,
  StyleSheet,
} from 'react-native';
import Title from '../../components/Title';
import NumberContainer from './NumberContainer';
import PrimaryButton from '../../components/PrimaryButton';

const GUESS_DIRECTION = {
  LOWER: 'lower',
  GREATER: 'greater',
};

function generateRandomBetween (min, max, exclude) {
  const random = Math.floor(Math.random() * (max - min)) + min;

  return random === exclude
    ? generateRandomBetween(min, max, exclude)
    : random;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen ({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function onGuess (direction) {
    if ((direction === GUESS_DIRECTION.LOWER && currentGuess < userNumber)
      || (direction === GUESS_DIRECTION.GREATER && currentGuess > userNumber)
    ) {
      return Alert.alert('Don\'t lie!', 'You know that this is wrong', [{ text: 'Sorry', style: 'cancel' }]);
    }

    if (direction === GUESS_DIRECTION.LOWER) {
      maxBoundary = currentGuess;
    } else if (direction === GUESS_DIRECTION.GREATER) {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.gameScreen}>
      <Title>Opponent's guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>Greater or lower?</Text>

        <PrimaryButton onPress={() => onGuess(GUESS_DIRECTION.GREATER)}>+</PrimaryButton>
        <PrimaryButton onPress={() => onGuess(GUESS_DIRECTION.LOWER)}>-</PrimaryButton>
      </View>

      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameScreen: {
    flexGrow: 1,
    padding: 24,
  },

});
