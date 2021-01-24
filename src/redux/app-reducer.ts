import {getAuthUserData} from "./auth-reducer";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean,
    globalError: null | boolean
}
let initialState: InitialStateType = {
    initialized: false,
    globalError: null
};

const appReducer = (state = initialState, action:InitializedSuccessActionType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


type DispatchType = Dispatch<InitializedSuccessActionType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, InitializedSuccessActionType>

type InitializedSuccessActionType = {
    type:typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());

    //dispatch(somethingelse());
    //dispatch(somethingelse());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}


export default appReducer;