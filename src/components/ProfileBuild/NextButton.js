import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "react-native-paper";

const NextButton = ({handleNextPress, setCurrentIndex, currentIndex, isCurrentStepValid, values}) => {
  if(currentIndex > 3 ) return

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        height: 50,
        width: "100%",
        paddingHorizontal: 8,
      }}
    >
      <Button
      mode='contained'
      disabled={!isCurrentStepValid(values)}
      onPress={()=> {
        setCurrentIndex(prev => prev + 1)
        handleNextPress()
      }}
      contentStyle={{
        height:'100%'
      }}
      height={{
        height:'100%'
      }}

      >
        <Text style={{color:'white'}} >Next</Text>
      </Button>
    </View>
  );
};

export default NextButton;
