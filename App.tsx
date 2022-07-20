import React from 'react';
import {SafeAreaView, Button, View, ActivityIndicator} from 'react-native';

const App = () => {
  //<div> == <View> <></>
  /* 
  <div>Hello world</div>
  */
  return (
    <SafeAreaView>
      <View style={{
        backgroundColor:"grey",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Button 
          onPress={()=> console.log("pressed")}
          title='Hello world'
        />
        <ActivityIndicator />
      </View>
    </SafeAreaView>
  );
};

export default App;
