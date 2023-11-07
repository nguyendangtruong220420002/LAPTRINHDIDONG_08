import { Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Trang1 from './Trang1';
import Trang2 from './Trang2';
import Trang3 from './Trang3';

function Use(){
  const route = useRoute();
  const {data} = route.params;
  return(
    <View style={{flexDirection:'row', }}>
      <Image
        source={{ uri: data.img }}
        style={{ width: '50px', height: '50px', resizeMode:'contain', borderRadius:'100px', left:'100px' }} 
      />
      <View style={{ justifyContent:'center', alignItems:'center'}}>
        <Text style={{ color :'black' , left:'100px', fontSize:'20px', fontWeight:'bold', textAlign:'center'}}> Hi {data.use}</Text>
        <Text style={{ color :'#9095A0' , left:'100px', fontWeight:'1px', textAlign:'center'}}> Have agrate day a head</Text>
      </View>
    </View>
  );
}


const Stack = createStackNavigator();
const Navigation =()=> {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Trang1' component={Trang1}></Stack.Screen>
            <Stack.Screen name='Trang2' component={Trang2} options={()=>({headerTitle: ()=><Use></Use>})}></Stack.Screen>
            <Stack.Screen name='Trang3' component={Trang3}  options={()=>({headerTitle: ()=><Use></Use>})}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;


