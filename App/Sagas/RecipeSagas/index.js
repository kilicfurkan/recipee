import { put, call } from 'redux-saga/effects'
import { API_KEY } from 'react-native-dotenv'

import { requestRecipes, requestRecipeDetail } from '../../Services/Api'
import RecipeActions from '../../Redux/RecipeRedux'

export function* getRecipes(action) {
  try {
    const body = {
      type: action.mealType,
      number: action.numberOfMeals,
      apiKey: API_KEY
    }
    const response = yield call(requestRecipes, body)
    const recipes = response.data.results
    yield put(RecipeActions.getRecipesSucceeded(recipes))
  } catch (e) {
    yield put(RecipeActions.getRecipesFailed(e))
  }
}

export function* getRecipeDetail(action) {
  console.log(action, 'getRecipeDetail')
  try {
    const body = {
      apiKey: API_KEY
    }
    const response = yield call(requestRecipeDetail, body, action.recipeId)
    console.log(response, 'response')
    const recipeDetail = response.data
    yield put(RecipeActions.getRecipeDetailSucceeded(recipeDetail))
  } catch (e) {
    yield put(RecipeActions.getRecipeDetailFailed(e))
  }
}


