import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getRecipesInProgress: ['mealType', 'numberOfMeals'],
  getRecipesSucceeded: ['recipes'],
  getRecipesFailed: ['error'],
  getRecipeDetailInProgress: ['recipeId'],
  getRecipeDetailSucceeded: ['recipeDetail'],
  getRecipeDetailFailed: ['error'],
})

/* ------------- Reducer ------------- */

const INITIAL_STATE = Immutable({
  recipes: [],
  recipeDetail: {},
  loading: false,
  error: false
})

const getRecipesInProgress = (state, {  }) => state.merge({
  recipes: [],
  loading: true,
  error: false,
})

const getRecipesSucceeded = (state, { recipes }) => state.merge({
  recipes,
  loading: false,
  error: false
})

const getRecipesFailed = (state, { error }) => state.merge({
  loading: false,
  error
})

const getRecipeDetailInProgress = (state, {  }) => state.merge({
  recipeDetail: {},
  loading: true,
  error: false,
})

const getRecipeDetailSucceeded = (state, { recipeDetail }) => state.merge({
  recipeDetail,
  loading: false,
  error: false
})

const getRecipeDetailFailed = (state, { error }) => state.merge({
  loading: false,
  error
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_RECIPES_IN_PROGRESS]: getRecipesInProgress,
  [Types.GET_RECIPES_SUCCEEDED]: getRecipesSucceeded,
  [Types.GET_RECIPES_FAILED]: getRecipesFailed,
  [Types.GET_RECIPE_DETAIL_IN_PROGRESS]: getRecipeDetailInProgress,
  [Types.GET_RECIPE_DETAIL_SUCCEEDED]: getRecipeDetailSucceeded,
  [Types.GET_RECIPE_DETAIL_FAILED]: getRecipeDetailFailed,
})

export const RecipeTypes = Types

export default Creators
