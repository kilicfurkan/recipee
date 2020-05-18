import { StyleSheet } from 'react-native';
import { Metrics, Colors } from 'App/Theme'

export default StyleSheet.create({
  card: {
    width: 160,
    height: 200,
    alignItems: 'flex-start',
    marginRight: 10,
    shadowColor: "#000",
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    position: 'absolute',
    zIndex: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 160
  },
  cardTitleContainer: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  mealType: {
    textTransform: 'uppercase',
    color: Colors.grey,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 5
  },
  mealTitle: {
    textAlign: 'left',
    fontWeight: '800'
  },
  image: {
    height: 120,
    width: 160,
  }
});
