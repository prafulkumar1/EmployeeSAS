import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'; // Import necessary components

const App = () => {
  return (
    <SafeAreaView 
     style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>React Native Fun! also man</Text>
      <TouchableOpacity style={{backgroundColor:"red",width:100,height:100}}>
        <Text>Hello world</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;