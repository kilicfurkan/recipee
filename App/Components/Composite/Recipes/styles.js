import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10
  },
  card: {
    width: 205,
    height: 250,
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 0.5,
    marginRight: 10,
    borderRadius: 10
  },
  cardTitleContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center'
  },
  mealTitle: {
    textAlign: 'center'
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 10
  }
});
