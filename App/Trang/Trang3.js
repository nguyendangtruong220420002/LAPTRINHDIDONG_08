
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
const url = "https://6544e42e5a0b4b04436d29bc.mockapi.io/Todo/Todo";

const Trang3 =( {navigation})=> { 
  const [add, setAdd] = useState;
  const ADD =()=>{
    useEffect(()=>{
      fetch(url , {method:'POST',
        body: JSON.stringify({
          jos1: 'haah',
        }),
        headers:{
            'Accept': 'application/json',
             'Content-type': "application/json; charset:UTF-8",
        },
        })
    .then(Res =>Res.json())
    .then(data => console.log(data));
      },[]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>ADD YOUR JOS</Text>
      <TextInput style={styles.input}
                  placeholder='Input jos'
                  onChangeText={setAdd}
                  value={add}
      ></TextInput>
      <Pressable style={styles.b1} 
      onPress={ADD}
      >
          <Text style={styles.t2}>FINISH</Text>
      </Pressable>
      <Image style={styles.img}
              source={require('./../IMG/book.png')}></Image>
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
    top:60,
    borderRadius:5
  },
  t2:{
    color:'#FFFFFF',
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
    top:10,
  },
  input:{
    width:350,
    height:50,
    borderRadius:3,
    borderColor:'black',
    borderWidth:"1px",
    marginTop:50,
    marginLeft:20,
    padding:10,
    fontSize:15
  },
  text1:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:50
  },
  img:{
    resizeMode:'contain',
    width:250,
    height:250,
   marginTop:100,
   marginLeft:70

  },
});
export default Trang3;
