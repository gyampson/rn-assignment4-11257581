import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (text) => setUsername(text);
  const handlePasswordChange = (text) => setPassword(text);
  const apps = require("../Images/apps.png");
  const logoogs = require("../Images/logoogs.png");
  const logface = require("../Images/logface.png");

  const handleLoginPress = () => {
    navigation.navigate("Home", { username: "samson", Email: "@gyampoh" });
    setErrorMessage("Invalid username or password");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>Jobizz</Text>
        <Text style={styles.text2}> Welcome Back 👋</Text>
        <Text style={styles.text3}>Let's log in. Apply to Jobs! </Text>
      </View>
      <View style={styles.logins}>
        <KeyboardAwareScrollView>
          <View style={styles.logs}>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              value={password}
              onChangeText={handleUsernameChange}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={true}
            />
            {errorMessage && <Text style={styles.Error}>{errorMessage}</Text>}
            <View style={styles.loginButton}>
              <Button title="Login" onPress={handleLoginPress} />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.flexes}>
          <View style={styles.horizontalRule1} />
          <View>
            <Text style={styles.txtcol}>Or continue with</Text>
          </View>
          <View style={styles.horizontalRule2} />
        </View>
        <View style={styles.images}>
          <Image source={apps} style={styles.apps} />
          <Image source={logoogs} style={styles.google} />
          <Image source={logface} style={styles.facebook} />
        </View>
        <View style={styles.footer3}>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.text4}>
              Haven't had an account?
              <Text style={styles.footer2}> Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingLeft: 100,
    paddingTop: 50,
  },

  logins: {
    marginTop: 50,
  },
  text1: {
    width: 150,
    height: 33,
    buttom: 500,
    right: 100,
    fontSize: 22,
    color: " rgba(53, 104, 153, 1)",
    fontWeight: "600",
    marginLeft: 30,
    marginBottom: 10,
  },
  footer: {
    color: "grey",
  },
  footer3: {
    paddingTop: 20,
    paddingLeft: 70,
    marginTop: 30,
  },
  text2: {
    fontSize: 24,
    marginLeft: 30,
    buttom: 500,
    right: 100,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text3: {
    fontSize: 12,
    marginBottom: 10,
    width: 150,
    marginLeft: 40,
    buttom: 500,
    right: 100,
    color: "grey",
  },
  textInput: {
    padding: 10,

    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    borderColor: "grey",
  },
  loginButton: {
    width: "100%",
    height: "100%",
    marginTop: 20,
  },
  button: {},
  Error: {
    color: "red",
  },
  text4: {
    marginTop: 10,
  },
  images: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  apps: {
    top: 35,
    left: 30,
  },
  google: {
    top: 35,
  },
  facebook: {
    top: 35,
    right: 30,
  },
  footer2: {
    color: "blue",
  },
  logs: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  horizontalRule1: {
    borderBottomColor: "background: rgba(175, 176, 182, 1)",
    borderBottomWidth: 1,
    marginVertical: 10,
    width: 130,
  },
  horizontalRule2: {
    borderBottomColor: "background: rgba(175, 176, 182, 1)",
    borderBottomWidth: 1,
    marginVertical: 10,
    width: 130,
  },
  flexes: {
    flexDirection: "row",

    gap: 5,

    marginTop: 60,
    paddingRight: 60,
  },
  txtcol: {
    color: "background: rgba(175, 176, 182, 1)",
  },
});
