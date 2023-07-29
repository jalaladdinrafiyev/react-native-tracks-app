import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)

  return (
    <KeyboardAvoidingView>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <View style={styles.container}>
          <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup}
          />
          <NavLink
            text="Already have an account? Sign in instead."
            routeName="Signin"
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
