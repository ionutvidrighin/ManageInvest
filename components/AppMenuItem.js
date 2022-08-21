import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Icon } from '@rneui/themed';

const AppMenuItem = ({itemTitle, iconName}) => {
  return (
    <View style={styles.menuItem}>
        <Button
            onPress={() => {}}
            title={itemTitle}
            icon={{
              name: iconName,
              type: 'ionicon',
              size: 20,
              color: 'black',
            }}
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontSize: 15, fontWeight: '700', color: 'black', marginLeft: 10 }}
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
    </View>
  )
}

export default AppMenuItem

const styles = StyleSheet.create({
    menuItem: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    }
})