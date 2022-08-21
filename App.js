import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import LoginPage from './screens/LoginPage';
import InvestCalculator from './screens/InvestCalculator';

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <LoginPage />
      </SafeAreaProvider>
    </Provider>
  )
}

