import React from 'react'
import { SafeAreaView, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import RecipeActions from '../../Redux/RecipeRedux'

class RecipeDetailScreen extends React.Component {
  componentDidMount() {
    const { navigation } = this.props

    const recipeId = navigation.getParam('recipeId', null)

    if (recipeId) {
      this.props.getRecipeDetail(recipeId)
    }
    console.log(recipeId, 'recipeId')
  }

  render() {
    const { navigate } = this.props.navigation
    const { data } = this.props.recipe

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail</Text>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
  const { recipe } = state

  return { recipe }
}

const mapDispatchToProps = {
  getRecipeDetail: RecipeActions.getRecipeDetailInProgress
}

export default connect(mapStateToProps, mapDispatchToProps) (withNavigation(RecipeDetailScreen))