import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Theme'

export default StyleSheet.create({
  image: {
    width: Metrics.screenDimensions.width,
    height: Metrics.screenDimensions.width,
  },
  imageContainer: {
    width: Metrics.screenDimensions.width,
    height: Metrics.screenDimensions.width,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    zIndex: 4
  },
  ingredientsButton: {
    position: 'absolute',
    bottom: 20,
    width: Metrics.screenDimensions.width - 40
  },
});
