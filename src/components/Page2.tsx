import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const Page2 = (props : any) => {
    console.log(props.route)

  return (
   <SafeAreaView>
     <Text style={{
        color:"black"
    }}>
        {props.route.params.message}
    </Text>
   </SafeAreaView>
  )
}

export default Page2