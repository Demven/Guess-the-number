import { useState } from 'react';
import {
  TextInput,
  View,
  Alert,
  StyleSheet,
} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import Title from '../../components/Title';
import Card from '../../components/Card';
import InstructionText from './InstructionText';
import colors from '../../constants/colors'

export default function StartGameScreen ({ onStartGame }) {
  const [number, setNumber] = useState('');

  function onReset () {
    setNumber('');
  }

  function onConfirm () {
    const chosenNumber = parseInt(number);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: onReset }],
      );
    } else {
      onStartGame(number);
    }
  }

  return (
    <View style={styles.startGameScreen}>
      <Title>Guess the Number</Title>

      <Card>
        <InstructionText>Enter a Number</InstructionText>

        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={setNumber}
          value={number}
        />

        <View style={styles.buttons}>
          <View style={styles.button}>
            <PrimaryButton onPress={onReset}>Reset</PrimaryButton>
          </View>

          <View style={styles.button}>
            <PrimaryButton onPress={onConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  startGameScreen: {
    marginTop: 100,
    flexGrow: 1,
    alignItems: 'center',
  },
  numberInput: {
    width: 50,
    height: 50,
    marginVertical: 8,
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.accent500,
    color: colors.accent500,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    flexGrow: 1,
  },
});
