import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {
    return (
    <View style={styles.container}>
      <Image source={require('../assets/book.png')} style={styles.Image} />
      <Text style={
        {padding:30,
        fontSize:20,
        }}>White Book
      </Text>
      <TextInput style = {styles.input} placeholder='Username' />
      <TextInput style = {styles.input1} secureTextEntry={true} placeholder='Password' />
      <Button style = {styles.loginButt} color = '#D9D9D9' title='Login' onPress={() => navigation.navigate('Home')}  />
      <Text style = {{
        paddingTop:40,
      }}>Forgot your password?</Text>
      <Text style = {{
        paddingTop: 30,
      }}>Create an account</Text>       
      <StatusBar style="auto" />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Image: {
      width: 111,
      height:111,
    },
    input: {
      width: 200,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 10,
      margin:10,
      padding:5,
    },
    input1: {
      width: 200,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 10,
      margin:10,
      padding:5,
      marginBottom: 25,
    },
    loginButt: {
      padding:30,
      width: '30%',
      height:30,
      marginVertical:30,
      borderRadius:20,
    },
  });
  