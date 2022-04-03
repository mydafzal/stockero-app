import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import Colors from 'react-native-multi-selectbox/src/constants/Colors'
import { useNavigation } from "@react-navigation/native";
import TouchableButton from '../../components/TouchableButton';
import ButtonN from "../../components/ButtonN";
import Spacer from "../../components/Spacer";
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const types = [
  {
    item: 'Sports',
    id: 'SP',
  },
  {
    item: 'Clothing',
    id: 'CL',
  },
  {
    item: 'Wood Products',
    id: 'WD',
  },
  {
    item: 'Paper Products',
    id: 'PP',
  },
  {
    item: 'Electronics',
    id: 'EL',
  },
  {
    item: 'Others',
    id: 'OT',
  },
]

const AddProductD = ({ navigation  }) => {

  const [selectedTypes, setSelectedTypes] = useState([])
  return (
    <View style={styles.container}>
        <View style={{padding: 30,}}>
      <SelectBox
        label="Select Product Type"
        options={types}
        selectedValues={selectedTypes}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        arrowIconColor= '#4F3074'
        searchIconColor= '#4F3074'
        toggleIconColor= '#4F3074'
        isMulti
      />
      </View>
      <Spacer height={20} />
      <View style={{alignItems: 'center'}}>
      <ButtonN buttonStyle ={{backgroundColor: '#4F3074'}} title={"Add"} textStyle={{ color: '#ffffff' }} onPress={() => navigation.navigate("Add Product Details")}/>
       </View>
    </View>
    
  )

  function onMultiChange() {
    return (types) => setSelectedTypes(xorBy(selectedTypes, [types], 'id'))
  }
}

export default AddProductD
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      
    //   alignItems: 'center',
        justifyContent: 'center',
    },
    
    Ftitle: {
      fontFamily: "Poppins_500Medium",
      fontSize: 12,
      color: Colors.gray,
      paddingLeft: 35,
      paddingTop: 12,
      paddingBottom: 12,
    },
   
  });