import React, {useState} from 'react';
import {SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  ScrollView, 
  TextInput,
  Button} from 'react-native';

const App = () => {
  //<div> == <View> <></>
  /* 
  <div>Hello world</div>
  */
 const theusers = [
      {
         "gender":"female",
         "name":{
            "title":"Mrs",
            "first":"Kylie",
            "last":"Carpenter"
         },
         "location":{
            "street":{
               "number":8519,
               "name":"Country Club Rd"
            },
            "city":"New York",
            "state":"Wisconsin",
            "country":"United States",
            "postcode":37731,
            "coordinates":{
               "latitude":"88.9835",
               "longitude":"152.5386"
            },
            "timezone":{
               "offset":"+4:30",
               "description":"Kabul"
            }
         },
         "email":"kylie.carpenter@example.com",
         "login":{
            "uuid":"819ad19f-4c9b-4c33-87dd-22605e52b69f",
            "username":"ticklishdog265",
            "password":"slacker",
            "salt":"VKUXlnaC",
            "md5":"1c973ebf4438aecc20068abae9251ca1",
            "sha1":"170a10a6ab3a98feec3eba1cea36cee33e3e3680",
            "sha256":"47cc28d8d0a546e1545a7c03b414f3ec5b1181cbffa36a85d2aba9bcd913bf0e"
         },
         "dob":{
            "date":"1968-01-23T05:59:06.069Z",
            "age":54
         },
         "registered":{
            "date":"2002-10-25T16:43:47.708Z",
            "age":19
         },
         "phone":"(931) 736-9940",
         "cell":"(857) 852-6452",
         "id":{
            "name":"SSN",
            "value":"019-50-5232"
         },
         "picture":{
            "large":"https://randomuser.me/api/portraits/women/32.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/32.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/32.jpg"
         },
         "nat":"US"
      },
      {
         "gender":"female",
         "name":{
            "title":"Miss",
            "first":"Sadie",
            "last":"Hughes"
         },
         "location":{
            "street":{
               "number":6396,
               "name":"Panama Road"
            },
            "city":"Rotorua",
            "state":"Wellington",
            "country":"New Zealand",
            "postcode":18190,
            "coordinates":{
               "latitude":"72.6679",
               "longitude":"-16.8004"
            },
            "timezone":{
               "offset":"+9:30",
               "description":"Adelaide, Darwin"
            }
         },
         "email":"sadie.hughes@example.com",
         "login":{
            "uuid":"1d8bc83a-6840-43f9-8835-4ced43eaaae1",
            "username":"bluebutterfly522",
            "password":"blue22",
            "salt":"75rlBGp9",
            "md5":"70c6292196e38cf926a269fc139317fc",
            "sha1":"c7cbc5c523fe322736d6ae89e8658e01190d2551",
            "sha256":"c8ff71d91e0289b25685a61f47fced1b883350ff35cc72c567479903c6c1f359"
         },
         "dob":{
            "date":"1957-07-03T02:09:57.720Z",
            "age":65
         },
         "registered":{
            "date":"2002-08-07T05:15:37.479Z",
            "age":19
         },
         "phone":"(521)-690-0657",
         "cell":"(921)-491-1286",
         "id":{
            "name":"",
            "value":null
         },
         "picture":{
            "large":"https://randomuser.me/api/portraits/women/22.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/22.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/22.jpg"
         },
         "nat":"NZ"
      },
      {
         "gender":"male",
         "name":{
            "title":"Mr",
            "first":"Musab",
            "last":"Busch"
         },
         "location":{
            "street":{
               "number":7869,
               "name":"Magnus Hydles vei"
            },
            "city":"Holme",
            "state":"Finnmark - Finnmárku",
            "country":"Norway",
            "postcode":"2610",
            "coordinates":{
               "latitude":"78.9026",
               "longitude":"146.3734"
            },
            "timezone":{
               "offset":"+8:00",
               "description":"Beijing, Perth, Singapore, Hong Kong"
            }
         },
         "email":"musab.busch@example.com",
         "login":{
            "uuid":"43684f22-1730-4394-99e0-0b8bf317f223",
            "username":"blackkoala864",
            "password":"edge",
            "salt":"yEdiQZK1",
            "md5":"077b077f3eee533e386e622b74e02b0b",
            "sha1":"0249cd202c9bae16928704aa15396bfa0c2b1305",
            "sha256":"a1eabdc91d1f6335c7af9ff734ffbd6f8d4cb0dda75b29dc26c40ca6091e1199"
         },
         "dob":{
            "date":"1958-12-28T10:41:54.660Z",
            "age":63
         },
         "registered":{
            "date":"2007-03-15T07:02:53.507Z",
            "age":15
         },
         "phone":"51474735",
         "cell":"94999010",
         "id":{
            "name":"FN",
            "value":"28125808338"
         },
         "picture":{
            "large":"https://randomuser.me/api/portraits/men/63.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/63.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/63.jpg"
         },
         "nat":"NO"
      },
      {
         "gender":"male",
         "name":{
            "title":"Mr",
            "first":"Nicklas",
            "last":"Hansen"
         },
         "location":{
            "street":{
               "number":337,
               "name":"Rypevej"
            },
            "city":"Ulsted, Hals",
            "state":"Danmark",
            "country":"Denmark",
            "postcode":19781,
            "coordinates":{
               "latitude":"57.5695",
               "longitude":"52.9711"
            },
            "timezone":{
               "offset":"-8:00",
               "description":"Pacific Time (US & Canada)"
            }
         },
         "email":"nicklas.hansen@example.com",
         "login":{
            "uuid":"c2a1dc84-3667-402a-99d5-26d43a527c6c",
            "username":"beautifulladybug255",
            "password":"true",
            "salt":"JiyOfv66",
            "md5":"506418f0af1fbe3f1d21f20d9d973410",
            "sha1":"1be1571a0db77b3b8d880370086b3fc5d0271469",
            "sha256":"12e0e74526528c870187a4b3e1f66cf3573486f2c0794e3bad2880b00e852b13"
         },
         "dob":{
            "date":"1978-06-23T20:59:08.722Z",
            "age":44
         },
         "registered":{
            "date":"2020-07-17T03:35:06.455Z",
            "age":2
         },
         "phone":"19790518",
         "cell":"68324532",
         "id":{
            "name":"CPR",
            "value":"230678-5804"
         },
         "picture":{
            "large":"https://randomuser.me/api/portraits/men/44.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/44.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/44.jpg"
         },
         "nat":"DK"
      },
      {
         "gender":"female",
         "name":{
            "title":"Madame",
            "first":"Erna",
            "last":"Leroux"
         },
         "location":{
            "street":{
               "number":8478,
               "name":"Rue Paul Bert"
            },
            "city":"Erlach",
            "state":"Zürich",
            "country":"Switzerland",
            "postcode":2090,
            "coordinates":{
               "latitude":"-24.0567",
               "longitude":"0.0347"
            },
            "timezone":{
               "offset":"+5:45",
               "description":"Kathmandu"
            }
         },
         "email":"erna.leroux@example.com",
         "login":{
            "uuid":"e6eff130-d440-4a32-8ae0-1926a15eee17",
            "username":"greenbutterfly678",
            "password":"moose1",
            "salt":"5s7tBMr9",
            "md5":"c4c5056dd9af2d3a2f467949808e67f5",
            "sha1":"8d07647b11bd513f819be09ea774c4206582f41b",
            "sha256":"218054fb3647c96b68f26586afd3c195137701c0ce4522977f85eda353dd624f"
         },
         "dob":{
            "date":"1976-12-31T08:56:55.335Z",
            "age":45
         },
         "registered":{
            "date":"2009-05-01T12:58:08.886Z",
            "age":13
         },
         "phone":"078 613 09 13",
         "cell":"077 049 63 49",
         "id":{
            "name":"AVS",
            "value":"756.7547.1360.10"
         },
         "picture":{
            "large":"https://randomuser.me/api/portraits/women/92.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/92.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/92.jpg"
         },
         "nat":"CH"
      }
   ]
 const [users, setUsers] = useState(theusers)
 const [name, setName] = useState("")

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput 
          placeholder='Enter Your Name'
          style={styles.textInput}
          onChangeText={(text)=> setName(text)}
          value={name}
        />
        <Button
          disabled={!name}
          title='Show Name'
          onPress={()=> console.warn(name)}
        />
        {/* <FlatList
         data={[...users, ...users, ...users, ...users, ...users]}
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
  }
})

export default App;
