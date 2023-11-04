
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
const url = "https://6544e42e5a0b4b04436d29bc.mockapi.io/Todo/Todo";

const Trang1 =( {navigation} ) => {
const [email, setEmail]= useState('');
const [data, setData] = useState([]);
  useEffect(()=>{ 
    fetch(url)
      .then(Res => Res.json())
      .then(json =>{
        setData(json)
        console.log(setData);
      })
},[]);

  return (
    <View style={styles.container}>
      <Image style={styles.img}
      source={require('./../IMG/book.png')}></Image>
      {console.log('body')}
      {
        /*data.map((item)  =>{
          return (
           <View>
             <Text style={styles.t1}> Job : {item.jos}</Text>
            <Text style={styles.t1}> Job : {item.use}</Text>
            <Text style={styles.t1}> Job : {item.id}</Text>
           </View>
            
          );
        })*/
      }
      <Text style={styles.t1}>MANAGE YOURTASK</Text>
      <Text style={styles.t1}>email: {email}</Text>
      <TextInput style={styles.input}
      placeholder='Email'
      onChangeText={setEmail}
      value={email}></TextInput>
      <Pressable style={styles.b1} 
      //onPress={()=> navigation.navigate('Trang2',{email: email}) }
      onPress={()=>{
        const useData = data.find((item)=> item.use === email);
        if(useData){
          navigation.navigate('Trang2', {data: useData});
        } else{

        }
      }}
      >
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
