import { Action, State } from "../types";

import {SHOW_MODAL, SHOW_TOAST} from "../utils/consts/actions";

export const initState : State = {
    showModal: false,
    showToast: false,
}

export const reducer = (state = initState, action: Action) => {
    switch (action.type){
        case SHOW_MODAL:
            return {
                ...state,
                showModal: action.payload
            }
        case SHOW_TOAST:
            return {
                ...state,
                showToast: action.payload
            }
        default:
            return state;
    }
}