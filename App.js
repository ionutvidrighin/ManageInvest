import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, ImageBackground } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import HomePage from './screens/HomePage';

export default function App() {
  const backgroundImage = require('./assets/invest.jpg')

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
            <HomePage />
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

