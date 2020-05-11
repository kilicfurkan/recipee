import React from 'react'
import { TextInput } from 'react-native'

import styles from './styles'

const Button = ({ placeholder, onChangeText, value, style, autoCapitalize, secureTextEntry }) => (
  <TextInput
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
    style={[style, styles.input]}
    autoCapitalize={autoCapitalize || 'none'}
    secureTextEntry={secureTextEntry}
  />
)

export default Button