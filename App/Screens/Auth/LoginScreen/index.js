import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { connect } from 'react-redux'

import UserActions from '../../../Redux/UserRedux'

import TextInput from '../../../Components/UI/TextInput'
import Button from '../../../Components/UI/Button'


import styles from './styles'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    const { email, password } = this.state
    const { loading } = this.props.user
    console.log(this.props.user, 'user')

    return (
      <SafeAreaView style={styles.container}>
        <Text>Login</Text>
        <TextInput
          value={email}
          onChangeText={(email) => this.setState({ email })}
          placeholder="email"
        />
        <TextInput
          value={password}
          onChangeText={(password) => this.setState({ password })}
          placeholder="password"
          secureTextEntry
        />
        <Button
          title="Login"
          onPress={() => this.props.login(email, password)}
          loading={loading}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state

  return { user }
}

const mapDispatchToProps = {
  login: UserActions.loginInProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)