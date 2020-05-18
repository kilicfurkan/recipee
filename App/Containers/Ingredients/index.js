import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const Ingredients = ({ ingredients }) => {
  console.log(ingredients, 'ingredients')
  return (
    <View style={styles.container}>
      {ingredients?.map(item => (
        <Text>{item.amount}</Text>
      ))}
    </View>
  )
}

export default Ingredients