import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default function GuessLogItem ({ roundNumber, guess }) {
  return (
    <View style={styles.guessLogItem}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guessLogItem: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: colors.accent500,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  text: {
    fontFamily: 'open-sans',
  },
});
