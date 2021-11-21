import React, { useEffect, useState } from 'react'
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  StatusBar, 
  View, 
  TouchableOpacity, 
  Image, 
  FlatList 
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SearchBar } from 'react-native-elements'

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'always'}
      style={{flex:1}}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView style={styles.container}>
        <SearchBar 
          placeholder='Search here'
          onChangeText={(value) => setSearch(value)}
          value={search}
          lightTheme
          style={{color: 'white'}}
        />
        <View style={styles.content}>
          <FlatList
            ListHeaderComponent={<Text style={styles.title}>Popular Products</Text>}
            numColumns={2}
            data={filteredProducts}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.productContainer} 
                onPress={() => navigation.navigate('ProductDetail', {
                  id: item.id,
                })}
              >
                <View>
                  <Image style={styles.image} source={{uri: item.image}} />
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text style={{textAlign: 'center'}}>$ {item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#FD4D4D',
  },
  productContainer: {
    width: 160,
    height: 'auto',
    margin: 8,
    padding: 10,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  productTitle: {
    textAlign: 'center',
    marginHorizontal: 10,
  },
  image: {
    height: 150,
    width: 150,
    margin: 10,
    resizeMode: 'contain',
  }
})
