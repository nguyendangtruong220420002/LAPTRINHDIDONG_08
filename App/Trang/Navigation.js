import { Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Trang1 from './Trang1';
import Trang2 from './Trang2';
import Trang3 from './Trang3';

function Use(){
  return(
    <View>
      <Text style={{ color :'red' , left:'100px'}}> haha</Text>
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
            <Stack.Screen name='Trang3' component={Trang3}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;


