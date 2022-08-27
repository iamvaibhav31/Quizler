/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { SelectCountry } from 'react-native-element-dropdown';
import React from "react";

const Dropdown = ({ data, currentvalue, onchangefun }) => {
     return (
          <SelectCountry
               style={styles.dropdown}
               selectedTextStyle={styles.selectedTextStyle}
               placeholderStyle={styles.placeholderStyle}
               // imageStyle={styles.imageStyle}
               // iconStyle={styles.iconStyle}
               maxHeight={200}
               value={currentvalue}
               data={data}
               valueField="value"
               labelField="lable"
               // imageField="image"
               placeholder="Type"
               searchPlaceholder="Search..."
               onChange={onchangefun}
          />
     );
};

export default Dropdown;

const styles = StyleSheet.create({
     dropdown: {
          margin: 16,
          height: 50,
          width: 160,
          backgroundColor: '#EEEEEE',
          borderRadius: 16,
          paddingHorizontal: 8,
     }, placeholderStyle: {
          fontSize: 16,
     },
     selectedTextStyle: {
          fontSize: 16,
          marginLeft: 8,
     },

});
