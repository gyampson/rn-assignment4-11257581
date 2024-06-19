// SearchComponent.js
import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SearchComponent = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchText);
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={30} color="grey" top={5} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    backgroundColor: "#f0f0f0",

    paddingHorizontal: 10,

    marginBottom: 0,
    width: 230,
    height: 35,
  },
  input: {
    bottom: 3,
  },
});

export default SearchComponent;
