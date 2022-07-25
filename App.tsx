import React, {useEffect, useState} from 'react';
import {SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  ScrollView, 
  TextInput,
  SectionList,
  Button} from 'react-native';

import http from './src/utils/consts/http';


const App = () => {
  //<div> == <View> <></>
  /* 
  <div>Hello world</div>
  */

 const [users, setUsers] = useState([])
 const [name, setName] = useState("")
 const [nameError, setNameError] = useState(false)
 const [nameErrorMsg, setNameErrorMsg] = useState ("");

 useEffect(()=>{
  //  fetch("https://randomuser.me/api/?results=5")
  //  .then(res=> res.json())
  //  .then(res => setUsers(res.results))
  //  .catch()
  http.get("?results=5")
  .then(res => setUsers(res.data.results))
  .catch()
},[])

const validateForm = () => {
  if(name.length == 0) {
    setNameError(true)
    setNameErrorMsg("Name field can not be empty")
  } else if (name.length < 6) {
    setNameError(true)
    setNameErrorMsg("Name should have atleast 6 characters")
  } else {
    setNameError(false)
    setNameErrorMsg("") 
  }
}

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput 
          placeholder='Enter Your Name'
          style={styles.textInput}
          onChangeText={(text)=> setName(text)}
          value={name}
        />
        {
          nameError && <Text style={styles.errorMsg}>{nameErrorMsg}</Text>
        }
        <Button
          // disabled={!name}
          title='Show Name'
          onPress={()=> {
            validateForm()
            // !nameError && navigate to home fn
          }}
        />
        {/* <FlatList
         data={users}
         renderItem={({item, index})=>{
          return <View style={styles.listItem}>
              <Text style={styles.listItemTxt}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
         }}
         keyExtractor={(item, index)=> index.toString()}
         contentContainerStyle={styles.flatListStyle}
         ListEmptyComponent={()=> <ActivityIndicator/>}
         ItemSeparatorComponent={()=> <View style={styles.itemSeparator}/>}
        /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    backgroundColor:"rgba(0,0,0,.1)",
    height:"100%",
    justifyContent:"center",
    padding:20,
  },
  listItem: {
    margin:5,
    backgroundColor:"lightblue",
    padding:5,
    borderRadius: 5
  },
  listItemTxt: {
    color: "blue"
  },
  flatListStyle: {
    backgroundColor: "green"
  },
  itemSeparator: {
    borderBottomColor: "white",
    borderWidth: 2
  },
  textInput: {
    borderColor: "lightblue",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
  sectionHeader: {
    fontSize:20,
    color: "green",
    fontWeight: "bold"
  },
  errorMsg: {
    color:"red",
    padding:10
  }
})

export default App;
