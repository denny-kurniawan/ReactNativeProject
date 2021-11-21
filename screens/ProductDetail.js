import React, { useContext, useEffect, useState } from 'react'
import { Image } from 'react-native'
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar,
  SafeAreaView
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ArrowLeft from '../components/ArrowLeft'
import { ProductContext } from '../context/ProductContext'

const ProductDetail = ({ route, navigation }) => {
  const { id } = route.params

  const { getById, product } = useContext(ProductContext)

  useEffect(() => {
    getById(id)
  }, [id])

  console.log(product);
  const { description, image, price, rating, title } = product

  return (
    <SafeAreaView style={styles.container}>
      { !product ? (
        <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>Loading..</Text>
      ) : (
        <KeyboardAwareScrollView>
        <View style={styles.header}>
          <ArrowLeft onPress={() => navigation.goBack()} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.productContainer}>
          <Image style={styles.image} source={{uri:image}} />
          <Text style={{ fontSize: 16, paddingVertical: 20 }}>Rating: {rating.rate}/5 ({rating.count})</Text>
          <Text style={{ fontSize: 20, paddingVertical: 20 }}>$ {price}</Text>
          <Text style={{ fontSize: 16, }}>Description</Text>
          <Text style={{ textAlign: 'center', paddingVertical: 10 }}>{description}</Text>
        </View>
        </KeyboardAwareScrollView>
      )}
      
    </SafeAreaView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  productContainer: {
    alignItems: 'center',
    height: 600,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
  }
})
