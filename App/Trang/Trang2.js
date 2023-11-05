import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
const url = "https://6544e42e5a0b4b04436d29bc.mockapi.io/Todo/Todo";


const Trang2 =( {navigation})=> {
  
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
                  placeholder='Search'
      ></TextInput>
      <View style={{margin:'10px', top:'40px'}}>
        <Text style={{backgroundColor:'#d9d9d9', borderRadius:'20px',
                     width:'330px', height:'40px', padding:'8px', 
                     fontSize:'18px', fontWeight:'bold',
                     left:'20px', }}>Check in</Text>
      </View>
      <Pressable style={styles.b1} 
      onPress={()=> navigation.navigate('Trang3')}
      >
          <Text style={styles.t2}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
  b1:{
    width:80,
    height:80,
    backgroundColor:'#00BDD6',
    left:150,
    top:50,
    borderRadius:40
  },
  t2:{
    color:'#ffffff',
    fontSize:50,
    fontWeight:'bold',
    textAlign:'center'
  },
  input:{
    width:350,
    height:50,
    borderRadius:3,
    borderColor:'black',
    borderWidth:"1px",
    marginTop:30,
    marginLeft:20,
    padding:10,
    fontSize:15
  },
});
export default Trang2;
