import React, { useState, createContext } from 'react'
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { Alert } from 'react-native';
import { handleError } from '../utils/errorHandling';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    token: '',
    uid: '',
    name: '',
  })

  const [name, setName] = useState(null)

  const register = async (_email, _password, _name) => {
    try {
      const auth = getAuth()
      setName(_name)
      const res = await createUserWithEmailAndPassword(auth, _email, _password)
      Alert.alert('Registration successful', 'You can login now')
    } catch (error) {
      handleError(error)
    }
  }

  const login = async (_email, _password) => {
    try {
      const auth = getAuth();
      const res = await signInWithEmailAndPassword(auth, _email, _password)
      const { email, getIdToken, uid, displayName } = res.user
      setUser({
        email,
        token: getIdToken(),
        uid,
        name: displayName ? displayName : name,
      })
    } catch (error) {
      handleError(error)
    }
  }

  const logout = async () => {
    try {
      const auth = getAuth()
      await signOut(auth)
      setUser((_user) => ({ ...user, token: null }))
    } catch (error) {
      handleError(error)
    }
  }

  const get = () => {
    try {
      const auth = getAuth();
      onAuthStateChanged(auth, (u) => {
        if (u) {
          setUser({
            email: u.email,
            token: u.getIdToken(),
            uid: u.uid,
            name: u.displayName,
          })
        }
      })
    } catch (error) {
      handleError(error)
    }
  }

  const edit = async (name) => {
    try {
      const auth = getAuth()
      await updateProfile(auth.currentUser, {
        displayName: name,
      })
      setUser((_user) => ({ ...user, name }))
      Alert.alert('Update Profile Success', 'Your profile is updated successfully')
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout, edit, get }}>
      { children }
    </AuthContext.Provider>
  )
}
