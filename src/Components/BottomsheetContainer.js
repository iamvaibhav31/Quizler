/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';


const BottomSheet = (props) => {

     return (
          <GestureHandlerRootView style={styles.container}>
               <BottomSheetModalProvider>
                    {props.children}
               </BottomSheetModalProvider>
          </GestureHandlerRootView>
     );
};

export default BottomSheet;

const styles = StyleSheet.create({
     container: {
          width: '100%',
          height: '100%',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
     },
});
