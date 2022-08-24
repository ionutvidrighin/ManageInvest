import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { useDispatch } from "react-redux"
import { updateScreen } from "../redux/activeScreenReducer";
import CalculatorLogo from '../assets/calculator.png';
import ActionButton from '../components/ActionButton';
import CalculatorSection from '../components/InvestCalculator/CalculatorSection';

const InvestCalculator = () => {
  const dispatch = useDispatch()

  const handleBackToMenu = () => {
    dispatch(updateScreen({
      name: 'AppMenu'
    }))
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSectionContainer}>
        <View style={styles.backToMenu}>
          <ActionButton 
            buttonColor="#cfcfcf"
            buttonContentColor="black"
            buttonWidth={112}
            buttonTitle="Back to Menu"
            iconName="undo"
            handleAction={handleBackToMenu}
          />
        </View>
      </View>

      <View>
        <Image
          source={CalculatorLogo} 
          style={styles.calculatorLogo}
        />
      </View>

      <CalculatorSection />
    </View>
  )
}

export default InvestCalculator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '95%',
    width: '95%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  topSectionContainer: {
    width: '100%',
    height: 65,
    backgroundColor: '#f2bf49',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  backToMenu: {
    width: '100%',
    position: 'absolute',
    top: 15,
    left: 10
  },
  calculatorLogo: {
    width: 150,
    height: 150
  }
})