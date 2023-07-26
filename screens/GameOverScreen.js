import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import colors from '../constants/colors';

export default function GameOverScreen ({ roundsNumbers, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  return (
    <ScrollView style={{ flexGrow: 1 }}>
      <View style={styles.gameOverScreen}>
        <Title>GAME OVER</Title>

        <View
          style={[styles.imageContainer, {
            width: imageSize,
            height: imageSize,
            borderRadius: imageSize / 2,
          }]}
        >
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gameOverScreen: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    margin: 36,
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
