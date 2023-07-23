import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function PrimaryButton ({ children, onPress }) {
  return (
    <View style={styles.primaryButton}>
      <Pressable
        style={({ pressed }) => [styles.pressable, pressed ? styles.pressed : undefined]}
        onPress={onPress}
      >
        <Text style={styles.text}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 28,
    shadowOpacity: 0.25,
  },
  pressable: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#72063c',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
