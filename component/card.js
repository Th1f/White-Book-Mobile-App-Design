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

export default function Card() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.nmContainer}>
        <Image
          source={require("../assets/prof1.jpg")}
          style={styles.profilePicture}
        />
        <Text style={styles.nameContainerText} numberOfLines={1}>
          James Hanstkahjdkashjkdjlk
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/post1.png")}
          style={styles.imagePost}
        />
      </View>
      <View style={styles.lAndCContainer}>
        <Image source={require('../assets/heart.png')} style = {styles.lAndC} />
        <Text>128</Text>
        <Image source={require('../assets/comment.png')} style = {styles.lAndC} />
        <Text>23</Text>
      </View>
      <View style={styles.descContainer}>
        <Text numberOfLines={8}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lacus posuere, sodales ligula vitae, porttitor lectus. Praesent scelerisque eros massa, ac congue nibh bibendum ut. Donec feugiat ornare dui, a maximus turpis dignissim sit amet. Curabitur vehicula pharetra feugiat. Nullam feugiat magna in est porttitor, nec luctus odio placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi lobortis quam finibus nunc accumsan cursus. Interdum et malesuada fames ac ante ipsum primis in
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    width: "40%",
    height:300,
    borderRadius: 5,
  },
  nmContainer: {
    flexDirection: "row",
    borderWidth: 1,
    width: "100%",
    height:'15%',
    flexWrap: "nowrap",
    borderBottomWidth:0,
  },
  nameContainerText: {
    padding: 10,
    flexShrink: 1,
  },
  profilePicture: {
    borderRadius: 100,
    width: "25%",
    height: "85%",
    margin: 3,
  },
  imageContainer: {
    width: "100%",
    height: "27%",
    borderWidth: 1,
    padding: 5,
    borderTopWidth: 0,
    borderBottomWidth:0,
  },
  imagePost: {
    width: "100%",
    height: "100%",
    borderTopWidth: 0,
  },
  lAndCContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    borderTopWidth: 0,
    borderBottomWidth:0,
    height:'5%'
  },
  lAndC: {
    height: '100%',
    width: '15%',
    marginLeft:5,
    marginRight:5
  },
  descContainer : {
    height: '53%',
    flexWrap: 'nowrap',
    padding:5,
    borderWidth:1,
    borderTopWidth: 0,
  }
});
