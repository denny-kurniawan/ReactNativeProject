import React, { useContext, useState } from 'react'
import { StyleSheet, Text, SafeAreaView, StatusBar, View, TouchableOpacity, TextInput } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AuthContext } from '../context/AuthContext'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'

const Profile = () => {
  const { 
    user: { email, name }, 
    logout, 
    edit,
  } = useContext(AuthContext)

  const [nameTemp, setNameTemp] = useState(name)

  const [editClicked, setEditClicked] = useState(false)
  const handleEditClick = () => setEditClicked(!editClicked)

  const submit = () => {
    console.log(nameTemp);
    edit(nameTemp)
  }


  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={'always'}
      style={{flex:1, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}
    >
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Account</Text>
        <TouchableOpacity onPress={logout}>
          <MaterialIcons name="logout" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.headerName}>
        <Text style={styles.name}>
          { name ? name : email}
        </Text>
        <Text style={styles.member}>
          Silver Member
        </Text>
      </View>
      <View style={styles.headerHightlight}>
        <AntDesign style={styles.photoHightlight} name='picture' size={48} color="black" />
        <View>
          <Text style={styles.follow}>Follower : 69</Text>
          <Text style={styles.follow}>Following : 420</Text>
        </View>
        <TouchableOpacity style={styles.editProfile} onPress={() => setEditClicked(true)}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentTitle}>
        {!editClicked ? (
          <>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Transaksi</Text>
            <Text style={{ fontSize: 14, color: 'grey' }}>Lihat Riwayat Transaksi {'>'}</Text>
          </>
        ) : (
          <Text style={{ fontSize: 18 }}>Profile</Text>
        )}
      </View>
      {!editClicked ? (
        <View style={{ backgroundColor: '#F4F4F4' }}>
          <View 
            style={{ 
              paddingHorizontal: 20,
              paddingVertical: 10, 
              backgroundColor: 'white', 
              borderTopEndRadius: 16,
              marginBottom: 1,
            }}
          >
            <Text>Menunggu Pembayaran</Text>
            <Text style={{ color: 'grey' }}>Semua transaksi yang belum dibayar</Text>
          </View>
          <View 
            style={{ 
              paddingHorizontal: 20,
              paddingVertical: 10, 
              backgroundColor: 'white',
              marginBottom: 1,
            }}
          >
            <Text>Dalam Pengiriman</Text>
            <Text style={{ color: 'grey' }}>Semua transaksi yang dalam pengiriman</Text>
          </View>
          <View 
            style={{ 
              paddingHorizontal: 20,
              paddingVertical: 10, 
              backgroundColor: 'white',
              borderBottomEndRadius: 16,
              marginBottom: 1,
            }}
          >
            <Text>Komplain Sebagai Pembeli</Text>
            <Text style={{ color: 'grey' }}>Lihat status komplain</Text>
          </View>
          <Text 
            style={{ 
              paddingHorizontal: 20,
              paddingTop: 40,
              paddingBottom: 10,
              fontSize: 18,
              fontWeight: '700',
            }}>
            Favorit Saya
          </Text>
          <View 
            style={{ 
              paddingHorizontal: 20,
              paddingVertical: 10, 
              backgroundColor: 'white', 
              borderTopEndRadius: 16,
              marginBottom: 1,
            }}
          >
            <Text>Terakhir Dilihat</Text>
            <Text style={{ color: 'grey' }}>Cek produk terakhir yang dilihat</Text>
          </View>
          <View 
            style={{ 
              paddingHorizontal: 20,
              paddingVertical: 10, 
              backgroundColor: 'white',
              marginBottom: 1,
            }}
          >
            <Text>Wishlist</Text>
            <Text style={{ color: 'grey' }}>Cek produk yang anda wishlist</Text>
          </View>
          <View 
            style={{ 
              paddingHorizontal: 20,
              paddingVertical: 10, 
              backgroundColor: 'white',
              marginBottom: 1,
            }}
          >
            <Text>Toko Favorit</Text>
            <Text style={{ color: 'grey' }}>Lihat toko yang anda ikuti</Text>
          </View>
          <View 
            style={{ 
              paddingHorizontal: 20,
              paddingVertical: 10, 
              backgroundColor: 'white',
              borderBottomEndRadius: 16,
              marginBottom: 1,
            }}
          >
            <Text>Langganan</Text>
            <Text style={{ color: 'grey' }}>Lihat semua langganan anda</Text>
          </View>
        </View>
      ) : (
        <View style={styles.inputContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput 
              style={styles.input} 
              value={email}
              editable={false} 
              selectTextOnFocus={false} 
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputTitle}>Display Name</Text>
            <TextInput 
              style={styles.input} 
              defaultValue={nameTemp} 
              placeholder='Enter your name'
              onChangeText={(value) => setNameTemp(value)}
            />
          </View>
          <View style={styles.btnGroup}>
            <TouchableOpacity style={styles.submit} onPress={submit}>
              <Text style={{ color: 'white' }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancel} onPress={handleEditClick}>
              <Text style={{ color: '#FD4D4D' }}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerName: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
  },
  member: {
    fontSize: 14,
    color: 'grey',
  },
  headerHightlight: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  photoHightlight: {
    borderWidth: .5,
    borderRadius: 90,
    padding: 5,
    borderColor: '#FD4D4D',
  },
  follow: {
    color: 'grey',
    fontSize: 12,
  },
  editProfile: {
    borderWidth: 1,
    borderColor: '#FD4D4D',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  editText: {
    color: '#FD4D4D',
  },
  contentTitle: {
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputGroup: {
    paddingVertical: 8,
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 2,
    borderBottomWidth: 1,
  },
  inputTitle: {
    fontSize: 16,
  },
  btnGroup: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  submit: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#FD4D4D',
  },
  cancel: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#FD4D4D',
  },
})
