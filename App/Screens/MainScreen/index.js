import React from 'react'
import { SafeAreaView, Text } from 'react-native'

class MainScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Main Screen</Text>
      </SafeAreaView>
    )
  }
}

export default MainScreen