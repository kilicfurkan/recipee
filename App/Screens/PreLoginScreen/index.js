import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

import Button from 'App/Components/UI/Button'

import styles from './styles'

class PreLoginScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Button title="Login" onPress={() => navigate('LoginScreen')} />
          <Button title="Register" onPress={() => navigate('RegisterScreen')} />
        </View>
      </SafeAreaView>
    )
  }
}

export default withNavigation(PreLoginScreen)