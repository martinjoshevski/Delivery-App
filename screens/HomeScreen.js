import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5 pl-2`}>
        <Image
          style={{
            width: 70,
            height: 70,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://i.imgur.com/w9hP30P.png",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
