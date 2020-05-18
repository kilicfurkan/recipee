import React from 'react'
import { ScrollView, View, Text, Image, ImageBackground, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import Ingredients from '../../Containers/Ingredients'
import RecipeDetail from '../../Containers/RecipeDetail'

import Button from '../../Components/UI/Button'

import RecipeActions from '../../Redux/RecipeRedux'
import styles from './styles'

class RecipeDetailScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowingIngredients: false
    }
  }

  componentDidMount() {
    const { navigation } = this.props

    const recipeId = navigation.getParam('recipeId', null)

    if (recipeId) {
      this.props.getRecipeDetail(recipeId)
    }
  }

  render() {
    const { isShowingIngredients } = this.state
    const { navigate } = this.props.navigation
    const { recipeDetail, loading } = this.props.recipe
    console.log(recipeDetail, 'recipeDetail')
    return (
      <ScrollView style={{ flex: 1 }}>
        {loading ?
          <ActivityIndicator style={{ flex: 1 }} /> :
          <>
            <View>
              <ImageBackground source={{ uri: recipeDetail.image }} style={styles.image}>
                <View style={styles.imageContainer} />
              </ImageBackground>
              <Button.Large
                title={'Show Ingredients'}
                onPress={() => this.setState({ isShowingIngredients: !isShowingIngredients })}
                style={styles.ingredientsButton}
              />
            </View>
            {isShowingIngredients ?
              <Ingredients ingredients={recipeDetail.extendedIngredients} /> :
              null
            }
            <RecipeDetail
              title={recipeDetail.title}
              sourceName={recipeDetail.sourceName}
              servings={recipeDetail.servings}
              readyInMinutes={recipeDetail.readyInMinutes}
            />
          </>
        }
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(RecipeDetailScreen))