import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, TextInput, Button, Pressable } from "react-native";

export default function TopNav({ focus,section }) {
  if (focus == "explore" && section == "home") {
    return (
      <View style={styles.headNav}>
        <Image
          source={require("../assets/bell.png")}
          style={styles.headNavBellIcon}
        />
        <View style={styles.headNavText}>
          <Pressable onPress={() => console.log('fck1')}>
          <Text style={[styles.headNavTextOptions]}>Following</Text>
          </Pressable>
          <Pressable onPress={() => console.log('fck2')} style={{ borderBottomWidth: 1 }}>
            <Text style={[styles.headNavTextOptions]}>Explore</Text>
          </Pressable>
          <Pressable onPress={() => console.log('fck3')}>
          <Text style={styles.headNavTextOptions}>Nearby</Text>
          </Pressable>
        </View>
        <Image
          source={require("../assets/search.png")}
          style={styles.headNavSearchIcon}
        />
      </View>
    );
  }
  if (focus == "friends" && section == "friends") {
    return (
      <View style={styles.headNav}>
        <Image
          source={require("../assets/bell.png")}
          style={styles.headNavBellIcon}
        />
        <View style={styles.headNavText}>
          <Text style={[styles.headNavTextOptions]}>Photos</Text>
          <View style={{ borderBottomWidth: 1 }}>
            <Text style={[styles.headNavTextOptions]}>Friends</Text>
          </View>
          <Text style={styles.headNavTextOptions}>Videos</Text>
        </View>
        <Image
          source={require("../assets/search.png")}
          style={styles.headNavSearchIcon}
        />
      </View>
    );
  }
  if (focus == "" && section == "messages") {
    return (
      <View style={styles.headNav}>
        <Image
          source={require("../assets/bell.png")}
          style={styles.headNavBellIcon}
        />
        <View style={styles.headNavText}>
          <View style={{ borderBottomWidth: 1 }}>
            <Text style={[styles.headNavTextOptions]}>Inbox</Text>
          </View>
        </View>
        <Image
          source={require("../assets/search.png")}
          style={styles.headNavSearchIcon}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headNav: {
    flex: 0.15,
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
    left: 0,
    right: 40,
    top: 0,
    justifyContent: "space-between",
    borderWidth: 0,
    marginBottom: 30,
    padding: 1,
    width: "100%",
    backgroundColor: "rgba(230,230,230,1.0)",
    zIndex: 2,
  },
  headNavText: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 50,
  },
  headNavTextOptions: {
    padding: 4,
  },
  headNavBellIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 40,
  },
  headNavSearchIcon: {
    width: 30,
    height: 30,
    marginRight: 20,
    marginTop: 40,
  },
});
