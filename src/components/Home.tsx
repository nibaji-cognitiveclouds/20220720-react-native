import React, {useEffect, useState, FC, useContext} from 'react';
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
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import http from '../utils/consts/http';
import { AppContext } from '../context/AppContext';

import {a} from "../../assets";

import { ApiResponse } from '../types';

import { styles } from '../styles/Styles';
import { SHOW_MODAL } from '../utils/consts/actions';

type Props = {
    navigation : NativeStackScreenProps<any, any>
}

const Home : FC<Props> = ({ navigation}) => {
  //<div> == <View> <></>
  /* 
  <div>Hello world</div>
  */

  const dispatch = useContext(AppContext).dispatch as any;

 const [users, setUsers] = useState<ApiResponse>([])
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
      <TheSnackBar />
      <Button 
        title='SHOW MODAL'
        onPress={()=>{
            dispatch({
                type: SHOW_MODAL,
                payload: true
            })
        }}
      />
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
    */}
    <Button
      // disabled={!name}
      title='Move to Page 2'
      onPress={()=> {
        // validateForm()
        // !nameError && navigate to home fn
        //@ts-ignore
        navigation.navigate("Page2", {
            "message": "Hi",
        })
      }}
    />
        <FlatList
         data={users}
         renderItem={({item, index})=>{
          return <View style={styles.listItem}>
              <Text style={styles.listItemTxt}>
                {item?.name?.first} {item?.name?.last}
              </Text>
            </View>
         }}
         keyExtractor={(item, index)=> index.toString()}
         contentContainerStyle={styles.flatListStyle}
         ListEmptyComponent={()=> <ActivityIndicator/>}
         ItemSeparatorComponent={()=> <View style={styles.itemSeparator}/>}
        />
        {/* <View
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
              <Text style={{
                backgroundColor:"white",
                fontSize:30,
              }}>
                    {props.msg}
              </Text>
          </ImageBackground>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
