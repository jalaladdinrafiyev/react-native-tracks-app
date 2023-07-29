import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext)

  return (
    <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <View style={styles.container}>
          <AuthForm
            headerText="Sign In to Your Account"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit={signin}
          />
          <NavLink
            text="Don't have an account? Go back to sign up."
            routeName="Signup"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  contentContainerStyle: {
    paddingVertical: 150
  }
})

export default SignupScreen
