import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import MyColors from "../../constants/MyColors";

const NextButton = ({handleNextPress, setCurrentIndex, currentIndex, isCurrentStepValid, values}) => {
  if(currentIndex > 3 ) return

  return (
    <View
      style={{
        position: "absolute",
        bottom: 12,
        height: 50,
        width: "100%",
        paddingHorizontal: 28,
      }}
    >
      <Button
      mode='contained'
      theme={{
        roundness:2,
      }}
      disabled={!isCurrentStepValid(values)}
      onPress={()=> {
        setCurrentIndex(prev => prev + 1)
        handleNextPress()
      }}
      contentStyle={{
        height:'100%'
      }}
      style={{
        backgroundColor:!isCurrentStepValid(values) ? 'lightgray' : MyColors.DARK_GREY,
        height:'100%'
      }}

      >
        <Text style={{color:'white', fontFamily:'Outfit-Medium', fontSize:16}} >Next</Text>
      </Button>
    </View>
  );
};

export default NextButton;
