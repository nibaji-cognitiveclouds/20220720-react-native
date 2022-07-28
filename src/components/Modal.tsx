import React, { FC, useContext} from "react"
import { Modal, View, Text, Button } from "react-native"
import { AppContext } from "../context/AppContext";

import { styles } from "../styles/Styles"
import { SHOW_MODAL } from "../utils/consts/actions";

const TheModal : FC = () => {
    const state = useContext(AppContext).state;
    const dispatch = useContext(AppContext).dispatch as any;

    return <Modal
      visible={state.showModal}
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
            dispatch({
                type: SHOW_MODAL,
                payload: false
            })
          }}
        />
      </View>
    </Modal>
  }

  export default TheModal;