import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { UserTypes } from '../Redux/UserRedux'
import { RecipeTypes } from '../Redux/RecipeRedux'

/* ------------- Sagas ------------- */
import { register, login } from './UserSagas'
import { getRecipes, getRecipeDetail } from './RecipeSagas'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(UserTypes.REGISTER_IN_PROGRESS, register),
    takeLatest(UserTypes.LOGIN_IN_PROGRESS, login),
    takeLatest(RecipeTypes.GET_RECIPES_IN_PROGRESS, getRecipes),
    takeLatest(RecipeTypes.GET_RECIPE_DETAIL_IN_PROGRESS, getRecipeDetail),
  ])
}
