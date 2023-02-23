import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, TextInput, Button, Pressable } from "react-native";

export default function BottomNav({ focus ,nav }) {
  if (focus == "home") {
    return (
      <View style={styles.bottomNav}>
        <Pressable style={styles.bottomNavOptionContainer} >
          <Image
            source={require("../assets/homeFocus.png")}
            style={styles.bottomNavIcons}
          />
          <Text style={styles.bottomNavFocused}>Home</Text>
        </Pressable>
        <Pressable style={styles.bottomNavOptionContainer} onPress ={()=>nav.navigate('Friends')}>
          <Image
            source={require("../assets/friends.png")}
            style={styles.bottomNavIcons}
          />
          <Text style={styles.bottomTextNav}>Friends</Text>
        </Pressable>
        <View style={styles.uploadButton}>
          <Text style={[styles.bottomNavFocused, { fontSize: 15 }]}>+</Text>
        </View>
        <Pressable style={styles.bottomNavOptionContainer} onPress ={()=>nav.navigate('Messages')}>
          <Image
            source={require("../assets/messages.png")}
            style={styles.bottomNavIcons}
          />
          <Text style={styles.bottomTextNav}>Messages</Text>
        </Pressable>
        <Pressable style={styles.bottomNavOptionContainer}>
          <Image
            source={require("../assets/me.png")}
            style={styles.bottomNavIcons}
          />
          <Text style={styles.bottomTextNav}>Me</Text>
        </Pressable>
      </View>
    );
  }
  if (focus == "friends") {
    return (
      <View style={styles.bottomNav}>
        <Pressable style={styles.bottomNavOptionContainer} onPress ={()=>nav.navigate('Home')}>
          <Image
            source={require("../assets/home.png")}
            style={styles.bottomNavIcons}
          />
          <Text style={styles.bottomTextNav}>Home</Text>
        </Pressable>
        <Pressable style={styles.bottomNavOptionContainer}>
          <Image
            source={require("../assets/friendsFocus.png")}
            style={styles.bottomNavIcons}
          />
          <Text style={styles.bottomNavFocused}>Friends</Text>
        </Pressable>
        <Pressable style={styles.uploadButton}>
          <Text style={[styles.bottomNavFocused, { fontSize: 15 }]}>+</Text>
        </Pressable>
        <Pressable style={styles.bottomNavOptionContainer} onPress ={()=>nav.navigate('Messages')}Pressable>
          <Image
            source={require("../assets/messages.png")}
            style={styles.bottomNavIcons}
          />
          <Text style={styles.bottomTextNav}>Messages</Text>
        </Pressable>
        <Pressable style={styles.bottomNavOptionContainer}>
          <Image
            source={require("../assets/me.png")}
            style={styles.bottomNavIcons}
          />
          <Text style={styles.bottomTextNav}>Me</Text>
        </Pressable>
      </View>
    );
  }
  if (focus == "messages") {
    return (
      <View style={styles.bottomNav}>
        <Pressable style={styles.bottomNavOptionContainer} onPress ={()=>nav.navigate('Home')}>
          <Image
            source={require("../assets/home.png")}
            style={styles.bottomNavIcons}
          />
          <Text style={styles.bottomTextNav}>Home</Text>
        </Pressable>
        <Pressable style={styles.bottomNavOptionContainer} onPress ={()=>nav.navigate('Friends')}>
          <Image
            source={require("../assets/friends.png")}
            style={styles.bottomNavIcons}
          />
          <Text style={styles.bottomTextNav}>Friends</Text>
        </Pressable>
        <Pressable style={styles.uploadButton}>
          <Text style={[styles.bottomNavFocused, { fontSize: 15 }]}>+</Text>
        </Pressable>
        <Pressable style={styles.bottomNavOptionContainer}>
          <Image
            source={require("../assets/messagesFocus.png")}
            style={styles.bottomNavIcons}
          />
          <Text style={styles.bottomNavFocused}>Messages</Text>
        </Pressable>
        <Pressable style={styles.bottomNavOptionContainer}>
          <Image
            source={require("../assets/me.png")}
            style={styles.bottomNavIcons}
          />
          <Text style={styles.bottomTextNav}>Me</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  uploadButton: {
    borderColor: "#fff",
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
  },
  bottomNavOptionContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    borderColor: "white",
    alignItems: "center",
  },
  bottomNavIcons: {
    height: 20,
    width: 20,
    justifyContent: "center",
  },
  bottomNavFocused: {
    color: "#fff",
  },
  bottomTextNav: {
    color: "#5c5c5c",
  },
});
