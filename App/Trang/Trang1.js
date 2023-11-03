import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React from 'react';


const Trang1 =( {navigation} ) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img}
      source={require('./../IMG/book.png')}></Image>
      <Text style={styles.t1}>MANAGE YOUR TASK</Text>
      <TextInput style={styles.input}
      placeholder='Email'></TextInput>
      <Pressable style={styles.b1} 
      onPress={()=> navigation.navigate('Trang2')}>
          <Text style={styles.t2}>GET</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
  img:{
    resizeMode:'contain',
    width:300,
    height:300,
    top:30,
    left:45
  },
  t1:{
    width:380,
    height:50,
    fontSize:30,
    color:'blue',
    top:50,
    left:50,
    fontWeight:'bold'
   
  },
  input:{
    width:320,
    height:40,
    borderRadius:5,
    borderColor:'red',
    borderWidth:"1px",
    marginTop:100,
    marginLeft:30
  },
  b1:{
    width:200,
    height:50,
    backgroundColor:'blue',
    left:90,
    top:80,
    borderRadius:5
  },
  t2:{
    color:'#FFFFFF',
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
    top:10,
    
  }
});
export default Trang1;
