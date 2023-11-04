
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
const url = "https://6544e42e5a0b4b04436d29bc.mockapi.io/Todo/Todo";


const Trang2 =( {navigation})=> {
  const [data, setData] = useState([]);
  useEffect(()=>{
  fetch(url)
    .then(Res => Res.json())
    .then(json =>{
      setData(json)

    })
  },[]);
  return (
    <View style={styles.container}>
      {
        data.map((item)  =>{
          return (
            <Text style={styles.t1}> Job : {item.jos}</Text>
          );
        })
      }
      
      <Pressable style={styles.b1} 
      onPress={()=> navigation.navigate('Trang3') }
      >
          <Text style={styles.t2}>GET</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
   
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
export default Trang2;
