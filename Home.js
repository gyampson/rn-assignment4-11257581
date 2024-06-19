import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
const pic = require("../Images/pic.png");
const filter = require("../Images/filter.png");
const facebook = require("../Images/facebook.png");
const google = require("../Images/google.png");
const burger = require("../Images/burger.png");
const beacon = require("../Images/beacon.png");
const f = require("../Images/f.png");
const particles = require("../Images/particles.png");
const apps = require("../Images/apps.png");
import SearchComponent from "./SearchComponent";

const HomeScreen = ({ route }) => {
  const { username, Email } = route.params;
};
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pic}>
        <View>
          <Text style={styles.text}> </Text>
          <Text style={styles.text2}> </Text>
        </View>

        <Image source={pic} style={styles.img1} />
      </View>
      <View style={styles.pic}>
        <View style={styles.container1}>
          <SearchComponent placeholder="Search a job or position " />
        </View>
        <Image source={filter} style={styles.img2} />
      </View>
      <View style={styles.txv}>
        <Text style={styles.text3}>Featured Jobs</Text>
        <Text style={styles.txt}>See all</Text>
      </View>
      <ScrollView>
        <ScrollView horizontal={true}>
          <View style={styles.scrollItem}>
            <ImageBackground source={particles}>
              <View style={styles.fbook1}>
                <Image source={f} style={styles.fbook} />
              </View>
              <Text style={styles.text4}>Software Engineer</Text>
              <Text style={styles.text45}>Facebook</Text>
              <Text style={styles.money}> $180,000</Text>
              <Text style={styles.city}>Accra, Ghana </Text>
            </ImageBackground>
          </View>

          <ImageBackground source={particles}>
            <ScrollView horizontal={true}>
              <View style={styles.scrollItem1}>
                <View style={styles.fbook1}>
                  <Image source={google} style={styles.google} />
                </View>
                <Text style={styles.text5}>$160,000</Text>
              </View>
              <View style={styles.scrollItem1}>
                <View style={styles.fbook1}>
                  <Image source={apps} style={styles.google} />
                </View>
                <Text style={styles.text5}>$160,000</Text>
              </View>
              <View style={styles.scrollItem1}>
                <View style={styles.fbook1}>
                  <Image source={google} style={styles.google} />
                </View>
                <Text style={styles.text5}>$160,000</Text>
              </View>
              <View style={styles.scrollItem1}>
                <View style={styles.fbook1}>
                  <Image source={google} style={styles.google} />
                </View>
                <Text style={styles.text5}>$160,000</Text>
              </View>
              <View style={styles.scrollItem1}>
                <View style={styles.fbook1}>
                  <Image source={google} style={styles.google} />
                </View>
                <Text style={styles.text5}>$160,000</Text>
              </View>
              <View style={styles.scrollItem1}>
                <View style={styles.fbook1}>
                  <Image source={google} style={styles.google} />
                </View>
                <Text style={styles.text5}>$160,000</Text>
              </View>
              <View style={styles.scrollItem1}>
                <View style={styles.fbook1}>
                  <Image source={google} style={styles.google} />
                </View>
                <Text style={styles.text5}>$160,000</Text>
              </View>
            </ScrollView>
          </ImageBackground>
        </ScrollView>

        <View style={styles.txv}>
          <Text style={styles.text3}>Popular Jobs</Text>
          <Text style={styles.txt1}> See all</Text>
        </View>
        <ScrollView>
          <View style={styles.burger}>
            <View>
              <Image source={burger} />
            </View>
            <Text style={styles.Text}>Jr Executive</Text>
            <Text style={styles.burger1}> $96,000/y</Text>
            <Text style={styles.burger2}>Burger King</Text>
            <Text style={styles.burger3}>Los Angeles, USA</Text>
          </View>
          <View style={styles.burger}>
            <View>
              <Image source={beacon} />
            </View>

            <Text style={styles.Text}>Product Manager</Text>
            <Text style={styles.beat1}> $84,000/y</Text>
            <Text style={styles.beat2}>Beats</Text>
            <Text style={styles.beat3}>Florida, USA</Text>
          </View>
          <View style={styles.burger}>
            <View>
              <Image source={facebook} />
            </View>
            <Text style={styles.Text}>Product Manager</Text>
            <Text style={styles.face1}> $86,000/y</Text>
            <Text style={styles.face2}>facebook</Text>
            <Text style={styles.face3}>Florida, USA</Text>
          </View>
          <View style={styles.burger}>
            <View>
              <Image source={google} />
            </View>
            <Text style={styles.Text}>Product Manager</Text>
            <Text style={styles.face1}> $89,000/y</Text>
            <Text style={styles.face2}>google</Text>
            <Text style={styles.face3}>Texas, USA</Text>
          </View>
          <View style={styles.burger}>
            <View>
              <Image source={google} />
            </View>
            <Text style={styles.Text}>Product Manager</Text>
            <Text style={styles.face1}> $86,000/y</Text>
            <Text style={styles.face2}>facebook</Text>
            <Text style={styles.face3}>Florida, USA</Text>
          </View>
          <View style={styles.burger}>
            <View>
              <Image source={pic} />
            </View>
            <Text style={styles.Text}>Product Manager</Text>
            <Text style={styles.face1}> $86,000/y</Text>
            <Text style={styles.face2}>facebook</Text>
            <Text style={styles.face3}>Florida, USA</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "left",
    paddingLeft: 20,
    paddingRight: 0,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    paddingTop: 0,
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
  },
  pic: {
    flexDirection: "row",
  },
  img1: {
    marginLeft: 120,
    marginTop: 0,
    left: 135,
    buttom: 80,
  },

  img2: {
    marginLeft: 90,
    backgroundColor: "rgba(242, 242, 243, 1)",
    width: 46,
    height: 46,
    borderRadius: 10,
    right: 70,
    top: 3,
  },
  scrollItem: {
    backgroundColor: "#5386E4",
    marginRight: 10,
    borderRadius: 24,
    width: 280,
    height: 186,
    marginTop: 5,
    paddingLeft: 10,
  },
  scrollItem1: {
    backgroundColor: "#04284A",
    marginRight: 10,
    borderRadius: 24,
    width: 280,
    height: 186,
    marginTop: 5,
    paddingLeft: 10,
  },
  text3: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 0,
  },
  text4: {
    fontSize: 16,
    fontWeight: "bold",
    top: 20,
    left: 40,
    color: "white",

    paddingLeft: 40,
  },
  text45: {
    fontSize: 15,
    fontWeight: "light",
    top: 25,
    left: 80,
    color: "white",
  },
  text5: {
    marginTop: 150,
    color: "white",
  },

  burger: {
    flexDirection: "row",
    marginRight: 300,
    backgroundColor: "white",
    paddingRight: 24,
    paddingLeft: 24,
    borderRadius: 20,
    width: 327,
    height: 74,
    marginTop: 10,

    paddingTop: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "rgba(232, 209, 186, 0.5)",
  },
  fbook: {
    paddingHorizontal: 10,
    top: 10,
    left: 10,
  },
  fbook1: {
    backgroundColor: "white",
    position: "absolute",
    borderRadius: 10,
    top: 20,
    width: 45,
    height: 45,
    left: 20,
  },
  money: {
    top: 110,
    color: "white",
  },
  city: {
    marginLeft: 90,
    marginBottom: 50,
    marginHorizontal: 7,
    left: 70,
    top: 90,
    color: "white",
  },
  container1: {
    flexDirection: "row",

    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  google: {
    top: 20,
    left: 6,
    top: 10,
  },
  burger1: {
    left: 105,
    fontWeight: "bold",
  },
  burger2: {
    right: 140,
    top: 25,
    color: "grey",
  },
  burger3: {
    right: 70,
    top: 25,
    color: "grey",
  },
  beat1: {
    left: 65,
    fontWeight: "bold",
  },
  beat2: {
    right: 170,
    top: 25,
    color: "grey",
  },
  beat3: {
    right: 40,
    top: 25,
    color: "grey",
  },
  face1: {
    left: 80,
    fontWeight: "bold",
  },
  face2: {
    right: 170,
    top: 25,
    color: "grey",
  },
  face3: {
    right: 50,
    top: 25,
    color: "grey",
  },
  Text: {
    fontWeight: "bold",
  },
  txv: {
    flexDirection: "row",
  },
  txt: {
    left: 160,
    top: 10,
    color: "grey",
  },
  txt1: {
    left: 160,
    top: 10,
    color: "grey",
  },
});
