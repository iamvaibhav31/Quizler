/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useMemo } from 'react';
import BottomSheetBody from './BottomsheetBody'

const Bottomsheet = ({ bottomSheetModalRef }) => {
     const snapPoints = useMemo(() => ['45%', '65%', '85%', '100%'], []);
     return (
          <BottomSheetModal
               ref={bottomSheetModalRef}
               index={0}
               snapPoints={snapPoints}

          >
               <BottomSheetBody />
          </BottomSheetModal>
     );
};

export default Bottomsheet;

const styles = StyleSheet.create({

});
