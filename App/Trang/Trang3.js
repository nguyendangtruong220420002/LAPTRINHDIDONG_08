
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';


const Trang3 =( {navigation})=> {
  return (
    <View style={styles.container}>
      <Pressable style={styles.b1} 
      onPress={()=> navigation.navigate('Trang2') }
      >
          <Text style={styles.t2}>GET</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor:'red'
   
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
export default Trang3;
