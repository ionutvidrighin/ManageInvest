import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import AppMenu from '../components/AppMenu/AppMenu';
import StartApp from '../components/StartApp';
import InvestCalculator from './InvestCalculator';

const HomePage = () => {
  const isAppStarted = useSelector(state => state.appStart.start)
  const currentActiveScreen = useSelector(state => state.screen.activeScreen)

  const renderActiveScreen = () => {
    return (
      <>
        { currentActiveScreen.name === 'AppMenu' &&
          <AppMenu />
        }

        { currentActiveScreen.name === 'InvestCalculator' &&
          <InvestCalculator />
        }
      </>
    )
  }

  return (
    <SafeAreaView style={styles.container}>

      { isAppStarted && renderActiveScreen() }

      { !isAppStarted && <StartApp /> }

    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
})