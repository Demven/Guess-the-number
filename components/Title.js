import { Text, StyleSheet, Platform } from 'react-native';

export default function Title ({ children }) {
  return (
    <Text style={styles.title}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    minWidth: 300,
    maxWidth: '80%',
    padding: 12,
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.OS === 'android' ? 0 : 2,
    borderColor: Platform.select({ ios: 'white', android: 'white' }),
  },
});
