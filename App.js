import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Welcome from './screens/Welcome'
import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import Profile from './screens/Profile'
import ProductDetail from './screens/ProductDetail'
import { AuthContext, AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'
import { AntDesign } from '@expo/vector-icons';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcGOqHNM54D86k2dUtF1wz5D6ZE4JWCHs",
  authDomain: "rn29finalproject.firebaseapp.com",
  projectId: "rn29finalproject",
  storageBucket: "rn29finalproject.appspot.com",
  messagingSenderId: "939610200376",
  appId: "1:939610200376:web:3424e82c012a9c0c08c9cd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function MainNavigator() {
  const { user } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Welcome'
      >
        {user.token ? (
          <>
            <Stack.Screen name='MainApp' component={MainApp} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} />
          </>
        ) : (
          <>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
          </>
        )}
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainApp = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen 
      name='Home' 
      component={Home} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        )
      }}
    />
    <Tab.Screen 
      name='Profile'
      component={Profile} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={size} color={color} />
        )
      }}
    />
  </Tab.Navigator>
)

const App = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <MainNavigator /> 
      </ProductProvider>
    </AuthProvider>
  )
}

export default App