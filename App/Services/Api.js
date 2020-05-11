import axios from "axios"
import { API_URL, API_KEY } from 'react-native-dotenv'
import * as Routes from "./ApiRouter";

export let axiosInstance = (versionNumber = "v1") => {
  return axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 30000,
  });
};

let backEndServices = axiosInstance();

export const requestRecipes = (requestBody) => {
  return backEndServices.get(Routes.getRecipesComplex, {
    params: requestBody
  });
}

export const requestRecipeDetail = (requestBody, recipeId) => {
  console.log(requestBody, recipeId, 'requestRecipeDetail')
  return backEndServices.get(`${Routes.recipesPath}/${recipeId}/information`, {
    params: requestBody
  });
}

// export const fetchDailyTrendingMovies = () => {
//   return aidyBackEndServices.get(Routes.dailyTrendingMoviesPath);
// }

// export const fetchWeeklyTrendingMovies = () => {
//   return aidyBackEndServices.get(Routes.weeklyTrendingMoviesPath);
// }