import { useState } from 'react';
import { TextInput, View, Alert, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen () {
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

      return;
    }

    console.info('Valid number');
  }

  return (
    <View style={styles.startGameScreen}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  startGameScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#4e0329',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  numberInput: {
    width: 50,
    height: 50,
    marginVertical: 8,
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ddb52f',
    color: '#ddb52f',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    flexGrow: 1,
  },
});