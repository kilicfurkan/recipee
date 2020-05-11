import { createAppContainer, createStackNavigator } from 'react-navigation'

import PreLoginScreen from 'App/Screens/PreLoginScreen'
import MainScreen from 'App/Screens/MainScreen'
import SplashScreen from 'App/Screens/SplashScreen'

import RecipeDetailScreen from 'App/Screens/RecipeDetailScreen'

import RegisterScreen from 'App/Screens/Auth/RegisterScreen'
import LoginScreen from 'App/Screens/Auth/LoginScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    PreLoginScreen: PreLoginScreen,
    RegisterScreen: RegisterScreen,
    LoginScreen: LoginScreen,
    MainScreen: MainScreen,
    RecipeDetailScreen: RecipeDetailScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'MainScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
