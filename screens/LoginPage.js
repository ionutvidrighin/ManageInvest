import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, } from '@rneui/themed';
import AppMenu from '../components/AppMenu';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/loginReducer'

const LoginPage = ({navigation}) => {
  const dispatch = useDispatch()
  const bg = require('../assets/invest.jpg')

  const [openMenu, setOpenMenu] = useState(false)
  const isUserLoggedIn = useSelector(state => state.login.logged)

  const handleLogin = () => {
    dispatch(login(true))
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <AppMenu 
          isMenuOpen={openMenu}
          closeMenu={setOpenMenu}
        />
        { !isUserLoggedIn &&
          <Button
            onPress={handleLogin}
            title="LOGIN"
            icon={{
              name: 'sign-in',
              type: 'font-awesome',
              size: 30,
              color: 'black',
            }}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontSize: 30, fontWeight: '700', color: 'black', marginLeft: 10 }}
            buttonStyle={{
              backgroundColor: '#e3be19',
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 30,
            }}
            containerStyle={{
              width: 250,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
        }
      </ImageBackground>
    </SafeAreaView>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})