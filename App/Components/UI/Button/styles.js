import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../../Theme'

export default StyleSheet.create({
  button: {
    height: 40, 
    width: 100,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 5
  },
  largeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    //width: Metrics.screenDimensions.width,
    height: 40, 
    borderColor: Colors.white,
    borderRadius: 5,
    borderWidth: 2
  },
  largeButtonTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700'
  }
});
