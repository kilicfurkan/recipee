import React from 'react'
import { TouchableOpacity, View, Text, FlatList, Image } from 'react-native'

import RecipeCard from 'App/Components/UI/RecipeCard'

import styles from './styles'

const Recipes = ({ data, title, navigation }) => {
  const _renderItem = (meal, key) => {
    console.log(meal, 'meal')
    return (
      <RecipeCard
        key={key}
        recipeId={meal.id}
        title={meal.title}
        duration={'45'}
        image={meal.image}
        mealType={title}
        navigation={navigation}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({ item, key }) => _renderItem(item, key)}
        horizontal
      />
    </View>
  )
}

export default Recipes