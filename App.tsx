import React, { useEffect, useState } from 'react';
import {SafeAreaView, Button, View, ActivityIndicator, FlatList} from 'react-native';

const App = () => {
  //<div> == <View> <></>
  /* 
  <div>Hello world</div>
  */


  const [arr, setArr] = useState<number[]>([])

  useEffect(()=>{
    setTimeout(
      ()=> setArr([1,2,3,4,5,6])
      ,4000
    )
  },[])

  return (
    <SafeAreaView>
      <View style={{
        backgroundColor:"grey",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
      }}>
        <FlatList 
          data={arr}
          renderItem={({item, index})=> {
            return <Button
            testID={`helloBtn-${item}`}
            title={`Hello-${item}`}
            onPress={()=> console.log("pressed")}
          />
          }}
        />
        <Button 
          testID='helloWorldBtn'
          onPress={()=> console.log("pressed")}
          title='Hello world'
        />
        <ActivityIndicator />
      </View>
    </SafeAreaView>
  );
};

export default App;
