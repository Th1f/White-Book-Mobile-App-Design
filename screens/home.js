import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import Cards from "../component/card";
import BottomNav from "../component/botttomNav";
import TopNav from "../component/topNav";

export default function Home({navigation}) {
  return (
    <View style={styles.home}>
      <TopNav focus= 'explore' section ='home' />
      <ScrollView style={styles.scrollContent}>
        <View style={styles.content}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </View>
      </ScrollView>
      <BottomNav focus='home' nav={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: "column",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 120,
  },
  scrollContent: {
    marginBottom: 70,
  },
  card: {
    borderWidth: 1,
    margin: 10,
    width: "42%",
    height: 300,
    borderRadius: 5,
  },
  bottomNav: {
    flex: 0.25,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexWrap: "wrap",
    borderWidth: 1,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "black",
  },
  
});
