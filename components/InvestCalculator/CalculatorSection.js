import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import SelectList from 'react-native-dropdown-select-list';
import Slider from '@react-native-community/slider';
import SelectInvestmentReturn from "./SelectInvestmentReturn";

const CalculatorSection = () => {
  const annualYield = [
    { key: 4, value: '4%'},
    { key: 5, value: '5%'},
    { key: 6, value: '6%'},
    { key: 7, value: '7%'},
    { key: 8, value: '8%'},
    { key: 9, value: '9%'},
    { key: 10, value: '10%'},
    { key: 11, value: '11%'},
    { key: 12, value: '12%'},
    { key: 13, value: '13%'},
    { key: 14, value: '14%'},
    { key: 15, value: '15%'}
  ]

  const [typedAmount, setTypedAmount] = useState(1000)
  const [selectedYield, setSelectedYield] = useState(null)
  const [selectedYear, setSelectedYear] = useState(1)

  return (
    <ScrollView>
      <View style={{width: '100%'}}>
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
            Calculeaza randamentul anual al investitiilor tale
          </Text>
        </View>

        {/* Year Selection */}
        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
          <Text style={{marginVertical: 15}}>Select investment period:</Text>
          <Text style={{marginBottom: 10, fontSize: 15, fontWeight: 'bold' }}> 
            {selectedYear} { selectedYear === 1 ? `year` : `years` } 
          </Text>
          <Slider
            style={{width: 250, height: 10}}
            minimumValue={1}
            maximumValue={30}
            minimumTrackTintColor="tomato"
            maximumTrackTintColor="#000000"
            thumbTintColor="#f2bf49"
            value={1}
            onValueChange={value => setSelectedYear(Math.ceil(value))}
          />
        </View>

        {/* Amount Invested & Anual Yield Selection  */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ padding: 10, height: 130,}}>
            <Text>Suma investita:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setTypedAmount(val)}
              value={typedAmount}
              placeholder="1000"
            />
          </View>

          <View style={{ padding: 10, height: 130 }}>
            <Text>Randament anual (%):</Text>
            <SelectList
              onPress={() => console.log('clicked the drop')}
              data={annualYield}
              setSelected={setSelectedYield}
              boxStyles={{height: 40, width: 130, marginTop: 5, borderColor: 'black', zIndex: 10}}
              inputStyles={{fontSize: 10}}
              dropdownStyles={{width: 70, height: 150}}
              dropdownTextStyles={{fontWeight: 'bold'}}
              placeholder="Randament"
            />
          </View>
        </View>

        <SelectInvestmentReturn />

        {/* <ScrollView style={{maxHeight: 250}}>
          <Text>LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
          LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
          </Text>
        </ScrollView> */}


      </View>
    </ScrollView>
  )
}

export default CalculatorSection;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 5
  }
})
