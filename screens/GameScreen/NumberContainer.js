import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import colors from '../../constants/colors';

const deviceWidth = Dimensions.get('window').width;

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
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderWidth: 4,
    borderColor: colors.accent500,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.accent500,
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});
