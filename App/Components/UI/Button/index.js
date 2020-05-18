import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'

import styles from './styles'

const Button = ({ title, onPress, loading, disabled, style }) => (
  <TouchableOpacity
    style={[style, styles.button]}
    onPress={onPress}
    disabled={loading || disabled}
  >
    {loading ?
      <ActivityIndicator /> :
      <Text>{title}</Text>
    }
  </TouchableOpacity>
)

Button.Large = ({ title, onPress, loading, disabled, style }) => {
  return (
    <TouchableOpacity
      style={[style, styles.largeButton]}
      onPress={onPress}
      disabled={loading || disabled}
    >
      {loading ?
        <ActivityIndicator /> :
        <Text style={styles.largeButtonTitle}>{title}</Text>
      }
    </TouchableOpacity>
  )
}

export default Button