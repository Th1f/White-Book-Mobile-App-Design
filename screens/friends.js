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

export default function Friends({navigation}) {
  return (
    <View style={styles.home}>
      <TopNav focus='friends' section ='friends' />
      <BottomNav focus='friends' nav={navigation} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: "column",
  },
});
