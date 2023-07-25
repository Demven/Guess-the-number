import { Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default function InstructionText ({ children, style }) {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: colors.accent500,
  },
});
