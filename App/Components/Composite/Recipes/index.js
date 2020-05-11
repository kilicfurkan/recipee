import React from 'react'
import { TouchableOpacity, View, Text, FlatList, Image } from 'react-native'
import styles from './styles'

const Recipes = ({ data, title, navigation }) => {
  const _renderItem = meal => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RecipeDetailScreen', { recipeId: meal.id })}>
        <Image source={{ uri: meal.image }} style={styles.image} />
        <View style={styles.cardTitleContainer}>
          <Text style={styles.mealTitle} numberOfLines={2}>{meal.title}</Text>
        </View>
      </TouchableOpacity>
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