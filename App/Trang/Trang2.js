
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React from 'react';
const Trang2 =( {navigation})=> {
  return (
    <View style={styles.container}>
      <Image style={styles.img}
      source={require('./../IMG/book.png')}></Image>
      <Text style={styles.t1}>MANAGE YOUR TASK</Text>
      <TextInput style={styles.input}
      placeholder='Email'></TextInput>
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
  
   
  }
});
export default Trang2;
