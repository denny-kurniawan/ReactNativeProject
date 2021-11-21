import React from 'react'
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity } from 'react-native'
import welcome from '../assets/welcome.png'

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={welcome}
        style={styles.background}
        resizeMode='cover'
      >
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={{ color: 'white' }}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnSecondary}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ color: '#FD4D4D' }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  title: {
    marginTop: 150,
    marginLeft: 30,
    color: 'white',
    fontSize: 36,
  },
  box: {
    marginTop: 400,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    height: '100%',
  },
  btnPrimary: {
    marginBottom: 10,
    paddingVertical: 10,
    backgroundColor: '#FD4D4D',
    borderRadius: 10,
    alignItems: 'center',
  },
  btnSecondary: {
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FD4D4D',
    alignItems: 'center',
  },
})
