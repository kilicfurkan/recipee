import React from 'react'
import { View, Text } from 'react-native'

import RecipeInfo from './RecipeInfo'

import styles from './styles'

const RecipeDetail = ({ title, sourceName, servings, readyInMinutes }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sourceName}>{sourceName}</Text>
      <View style={styles.recipeInfoContainer}>
        <RecipeInfo title={`${servings} Servings`} />
        <RecipeInfo title={`${readyInMinutes} Minutes`} />
      </View>
    </View>
  )
}

export default RecipeDetail