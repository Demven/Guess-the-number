import { useState, useEffect } from 'react';
import {
  Alert,
  View,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Title from '../../components/Title';
import NumberContainer from './NumberContainer';
import PrimaryButton from '../../components/PrimaryButton';
import Card from '../../components/Card';
import InstructionText from '../StartGameScreen/InstructionText';
import GuessLogItem from './GuessLogItem';

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

  const { width, height } = useWindowDimensions();

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
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
    setGuessRounds([newRandomNumber, ...guessRounds]);
  }

  return (
    <View style={styles.gameScreen}>
      <Title>Opponent's guess</Title>

      {width > 500
        ? (
          <>
            <View style={styles.buttonsWide}>
              <View style={styles.button}>
                <PrimaryButton onPress={() => onGuess(GUESS_DIRECTION.LOWER)}>
                  <Ionicons name='md-remove' size={24} color='white' />
                </PrimaryButton>
              </View>

              <NumberContainer>{currentGuess}</NumberContainer>

              <View style={styles.button}>
                <PrimaryButton onPress={() => onGuess(GUESS_DIRECTION.GREATER)}>
                  <Ionicons name='md-add' size={24} color='white' />
                </PrimaryButton>
              </View>
            </View>
          </>
        )
        : (
          <>
            <NumberContainer>{currentGuess}</NumberContainer>

            <Card>
              <InstructionText style={styles.instructionText}>Greater or lower?</InstructionText>

              <View style={styles.buttons}>
                <View style={styles.button}>
                  <PrimaryButton onPress={() => onGuess(GUESS_DIRECTION.LOWER)}>
                    <Ionicons name='md-remove' size={24} color='white' />
                  </PrimaryButton>
                </View>

                <View style={styles.button}>
                  <PrimaryButton onPress={() => onGuess(GUESS_DIRECTION.GREATER)}>
                    <Ionicons name='md-add' size={24} color='white' />
                  </PrimaryButton>
                </View>
              </View>
            </Card>
          </>
        )
      }

      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessRounds.length - index}
              guess={item}>{item}</GuessLogItem>
          )}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameScreen: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonsWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flexGrow: 1,
  },
  listContainer: {
    flexGrow: 1,
    padding: 16,
  },
});
