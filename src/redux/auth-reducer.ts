import {authAPI, ResultCodesEnum, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}
let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null, then captcha is not required
};

const authReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
type ActionType = SetAuthUserDataActionType | GetCaptchaUrlSuccessActionType
type DispatchType = Dispatch<ActionType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>


type SetAuthUserDataActionTypePayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionTypePayloadType
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean)
    : SetAuthUserDataActionType => ({
    type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}
});
type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string }
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

export const getAuthUserData = (): ThunkType =>
    async (dispatch) => {
        let meData = await authAPI.me();

        if (meData.resultCode === ResultCodesEnum.success) {
            let {id, login, email} = meData.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }

export const login = (email: string | null, password: string | null, rememberMe: boolean, captcha: string): any =>
    async (dispatch: any) => {
        let loginData = await authAPI.login(email, password, rememberMe, captcha);
        if (loginData.resultCode === ResultCodesEnum.success) {
            // success, get auth data
            dispatch(getAuthUserData())
        } else {
            if (loginData.resultCode === ResultCodesEnum.captchaIsRequired) {
                dispatch(getCaptchaUrl());
            }

            let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));
        }
    }

export const getCaptchaUrl = (): ThunkType =>
    async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }


export const logout = (): ThunkType =>
    async (dispatch) => {
        let response = await authAPI.logout();

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }

export default authReducer;