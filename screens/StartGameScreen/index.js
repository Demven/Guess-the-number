import { useState } from 'react';
import {
  TextInput,
  View,
  Alert,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  KeyboardAvoidingView,
} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import Title from '../../components/Title';
import Card from '../../components/Card';
import InstructionText from './InstructionText';
import colors from '../../constants/colors'

export default function StartGameScreen ({ onStartGame }) {
  const [number, setNumber] = useState('');

  const { height } = useWindowDimensions();

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
    <ScrollView style={{ flexGrow: 1 }}>
      <KeyboardAvoidingView
        style={{ flexGrow: 1 }}
        behavior='position'
      >
        <View
          style={[
            styles.startGameScreen,
            { marginTop: height < 380 ? 30 : 100 }
          ]}
        >
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  startGameScreen: {
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
