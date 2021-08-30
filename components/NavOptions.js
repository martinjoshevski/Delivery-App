import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    title: "Find a ride",
    image: "https://i.imgur.com/YMiqnwT.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://i.imgur.com/BSDN9By.png",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
