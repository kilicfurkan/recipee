import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import RecipeActions from '../../Redux/RecipeRedux'


import Recipes from 'App/Components/Composite/Recipes'
import Button from 'App/Components/UI/Button'

import styles from './styles'

class MainScreen extends React.Component {
  componentDidMount() {
    this.props.getRecipes('main course', 10)
  }

  render() {
    const { navigation } = this.props
    const { recipes, loading } = this.props.recipe
    console.log(this.props.recipe, 'recipe')

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {loading ? 
          <ActivityIndicator style={{ flex: 1 }} /> :
          // <Recipes data={recipes} title="Main Course" navigation={navigation} />
          <Text>Deneme</Text>
        }
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
  const { recipe } = state

  return { recipe }
}

const mapDispatchToProps = {
  getRecipes: RecipeActions.getRecipesInProgress
}

export default connect(mapStateToProps, mapDispatchToProps) (withNavigation(MainScreen))