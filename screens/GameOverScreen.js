import { View, Image, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import colors from '../constants/colors';

export default function GameOverScreen ({ roundsNumbers, userNumber, onStartNewGame }) {
  return (
    <View style={styles.gameOverScreen}>
      <Title>GAME OVER</Title>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumbers}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>

      <PrimaryButton onPress={onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  gameOverScreen: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    margin: 36,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    marginBottom: 24,
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: colors.primary500,
  },
});
