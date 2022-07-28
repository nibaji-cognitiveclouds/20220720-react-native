import React, {FC, useContext} from 'react'
import { SafeAreaView, Text } from 'react-native'

import { AppContext } from '../context/AppContext'
import { SHOW_MODAL } from '../utils/consts/actions'

import { styles } from '../styles/Styles'

type Props = {
    route:{
        params:{
            message: string
        }
    }
}

const Page2: FC<Props> = (props) => {
    const dispatch = useContext(AppContext).dispatch as any;
    const state = useContext(AppContext).state;

  return (
   <SafeAreaView>
    <Text
        onPress={()=>{
            dispatch({
                type: SHOW_MODAL,
                payload: true
            })
        }}
     style={[styles.listItemTxt, {backgroundColor: `${state.showModal ? "green" : "red"}`}]}
     >
        {props?.route?.params?.message}
    </Text>
   </SafeAreaView>
  )
}

export default Page2