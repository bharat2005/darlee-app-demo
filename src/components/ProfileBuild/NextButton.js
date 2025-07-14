import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NextButton = ({handleNextPress, setCurrentIndex, currentIndex}) => {

    if(currentIndex >= 3) return

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
      <TouchableOpacity
      onPress={()=> {
        setCurrentIndex(prev => prev + 1)
        handleNextPress()
      }}
        style={{
          height: "100%",
          width: "100%",
          backgroundColor:'black',
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
        }}

      >
        <Text style={{color:'white'}} >Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
