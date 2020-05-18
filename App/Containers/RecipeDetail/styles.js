import { StyleSheet } from 'react-native';
import { Metrics, Colors } from 'App/Theme'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '600'
  },
  sourceName: {
    color: Colors.grey,
  },
  recipeInfoContainer: {
    marginVertical: 20
  }
});
