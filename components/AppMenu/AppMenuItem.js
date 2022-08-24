import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from '@rneui/themed';

const AppMenuItem = ({itemTitle, iconName, goToPage}) => {

  return (
    <View style={styles.buttonContainer}>
      
      <View style={styles.iconContainer}>
        <Icon 
          name={iconName}
          color="black"
          type="fontisto"
          style={styles.icon}
        />
      </View>
      
      <Text style={styles.buttonText} onPress={goToPage}>
        { itemTitle }
      </Text>
    
    </View>
  )
}

export default AppMenuItem

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 250,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#cfcfcf',
    position: 'relative',
    marginTop: 25
  },
  iconContainer: {
    position: 'absolute',
    left: 15,
    bottom: 15
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20
  }
})