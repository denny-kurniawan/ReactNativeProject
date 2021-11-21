import React, { useState, useContext } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, Image, Dimensions, Text, View } from 'react-native'
import ArrowLeft from '../components/ArrowLeft'
import background from '../assets/login.png'
import { AuthContext } from '../context/AuthContext'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const { login } = useContext(AuthContext)

  const submit = () => {
    login(email, password)
  }

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'always'}
      style={{flex:1}}
      showsVerticalScrollIndicator={false}
    >
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={background}
      />
      <ArrowLeft
          style={styles.arrowLeft}
          onPress={() => navigation.goBack()}
      />
      <Text style={styles.title}>{`Welcome\nBack`}</Text>
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Sign In</Text>
        <TextInput 
          style={styles.input}
          placeholder='Email'
          keyboardType='email-address'
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput 
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <View style={styles.bottomText}>
          <TouchableOpacity>
            <Text style={{ color: '#FD4D4D' }}>Forgot Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={submit}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </KeyboardAwareScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-200,
  },
  arrowLeft: {
    marginTop: 50,
    marginLeft: 20,
    color: 'white',
  },
  title: {
    marginTop: 20,
    marginLeft: 30,
    color: 'white',
    fontSize: 36,
  },
  box: {
    marginTop: 250,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 40,
    height: '100%',
  },
  boxTitle: {
    fontSize: 36,
  },
  input: {
    marginVertical: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    fontSize: 16,
  },
  bottomText: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
