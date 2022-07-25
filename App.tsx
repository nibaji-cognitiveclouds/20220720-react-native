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
  Button,
  Modal,
  Image,
  ImageBackground
} from 'react-native';
import { Snackbar } from 'react-native-paper';

import http from './src/utils/consts/http';

import {a} from "./assets";


const App = () => {
  //<div> == <View> <></>
  /* 
  <div>Hello world</div>
  */

 const [users, setUsers] = useState([])
 const [name, setName] = useState("")
 const [nameError, setNameError] = useState(false)
 const [nameErrorMsg, setNameErrorMsg] = useState ("");
 
 const [showInfo, setShowInfo] = useState(false)

 useEffect(()=>{
  //  fetch("https://randomuser.me/api/?results=5")
  //  .then(res=> res.json())
  //  .then(res => setUsers(res.results))
  //  .catch()
  http.get("?results=5")
  .then(res => setUsers(res.data.results))
  .catch()
  console.log(users)
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

const TheModal = () => {
  return <Modal
    visible={showInfo}
    animationType='fade'
    transparent
  >
    <View style={styles.modalContainer}>
      <Text style={styles.modalTxt}>
      Name should have atleast have 6 characters
      </Text>
      <Button 
        title='OK'
        onPress={()=>{
          setShowInfo(false)
        }}
      />
    </View>
  </Modal>
}

const TheSnackBar = () => {
  return <Snackbar
  visible={showInfo}
  onDismiss={()=>{setShowInfo(false)}}
  action={{
    label: 'Ok',
    onPress: () => {
      setShowInfo(false)
    },
  }}>
  Name should have atleast have 6 characters
</Snackbar>
}

  return (
    <SafeAreaView>
      {/* <TheModal/> */}
      <TheSnackBar />
      <View style={styles.container}>
        {/* <View style={styles.nameHeadHolder}>
          <Text style={styles.nameHead}>
            Name
          </Text>
          <Text
          onPress={()=>{
            setShowInfo(!showInfo)
          }}
          style={styles.nameInfo}
          >
            i
          </Text>
            {showInfo && <Text style={styles.infoTxt}>
              Name should have atleast 6 characters
              </Text>}
        </View>
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
        /> */}
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
        <View
          style={{
            height:"100%",
            width:"100%",
            overflow:"hidden",
            backgroundColor:"blue"
          }}
        >
        <ImageBackground
          style={{
            height:"100%",
            width: "100%",
          }}
          resizeMode={"cover"}
          source={a}>
              <View 
                style={{backgroundColor:"red", height:20}}
              />
          </ImageBackground>
        </View>
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
  },
  nameHead:{
    marginBottom:10,
    marginRight:10
  },
  nameInfo:{
    backgroundColor:"orange",
    width:20,
    height:20,
    textAlign:"center",
    borderRadius:10
  },
  infoTxt: {
    backgroundColor:"white",
    color: "black",
    padding:5,
    borderRadius:5,
    position:"absolute",
    top: -30,
    zIndex:1
  },
  nameHeadHolder:{
    flexDirection:"row"
  },
  modalContainer:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "grey",
    top: "40%",
    padding:30,
    borderRadius:10
  },
  modalTxt:{
    color:"white",
    marginBottom:10
  }
})

export default App;
