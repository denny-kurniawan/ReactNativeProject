import { Alert } from 'react-native'

export const handleError = (err) => {
  const errorCode = err.code;
  const errorMessage = err.message;
  Alert.alert(errorCode, errorMessage)
}