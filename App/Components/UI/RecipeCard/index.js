import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
//import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles'

const RecipeCard = ({ recipeId, title, image, duration, mealType, navigation }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RecipeDetailScreen', { recipeId })}>
      <View style={styles.cardHeader}>
        <Text style={{ backgroundColor: 'white' }}>Menu</Text>
        <Text style={{ backgroundColor: 'white' }}>Kalp</Text>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.cardTitleContainer}>
        <Text style={styles.mealType}>{mealType}</Text>
        <Text style={styles.mealTitle} numberOfLines={2}>{title}</Text>
      </View>
      {/* <Icon name="person" size={30} color="#900" /> */}
    </TouchableOpacity>
  )
}

export default RecipeCard