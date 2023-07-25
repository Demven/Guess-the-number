import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default function NumberContainer ({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.text}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  numberContainer: {
    padding: 24,
    margin: 24,
    borderWidth: 4,
    borderColor: colors.accent500,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.accent500,
    fontFamily: 'open-sans-bold',
    fontSize: 36,
  },
});
