import React, { useState, useRef } from "react";
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, View, ScrollView, Image, FlatList } from "react-native";
import arrowDown from "../../assets/arrowDown.png";

const SelectInvestmentReturn = () => {

  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '1%',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '2%',
    },
    {
      id: '58694a0f-3da1-471f-bd96-71e29d72',
      title: '3%',
    },
    {
      id: '58694a0f-3da1-471f-bd96-45571e29d72',
      title: '4%',
    },
    {
      id: '58694a0f-3da11f-bd96-145571e29d72',
      title: '5%',
    },
    {
      id: '58694a0f-3da1-471f-145571e29d72',
      title: '6%',
    },

  ];

  const inputArrowRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(false)

  const shakeTextAnOpenDropdown = () => {
    if (inputArrowRef) {
      inputArrowRef.current?.rubberBand(1500)
      setOpenDropdown(!openDropdown)
    }
  }

  const renderDropdownOption = ({ item }) => (
    <Text> {item.title} </Text>
  )

  return (
    <View style={{ width: "100%", height: 150, alignItems: "center" }}>
      <View>

        <View onStartShouldSetResponder={shakeTextAnOpenDropdown} style={styles.inputContainer}>
          <View>
            <Text>Return (%)</Text>
          </View>
          <Animatable.View ref={inputArrowRef} useNativeDriver>
            <Image source={arrowDown} style={{width: 25, height: 25, marginLeft: 10}} />
          </Animatable.View>
        </View>

        <Animatable.View
          useNativeDriver
          transition="opacity"
          duration={1000}
          easing="ease-in-out"
          style={{ flex: 1, opacity: openDropdown ? 1 : 0 }}>
          <ScrollView style={styles.dropdownContainer}>
            { data.map(item => (
              <Text key={item.id}> {item.title} </Text>
            )) }
            {/* <FlatList
              data={DATA}
              renderItem={renderDropdownOption}
              keyExtractor={item => item.id}
            /> */}
          </ScrollView>
        </Animatable.View>
    
      </View>
    </View>
  )
}

export default SelectInvestmentReturn;

const styles = StyleSheet.create({
  inputContainer: {
    width: 135,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  dropdownContainer: {
    alignSelf: 'center',
    width: 70,
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#f2c138',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5
  }
})
