// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT;'
const SEND_MESSAGE = 'SEND-MESSAGE;'


let initialState = {
    dialogs: [
        {id: 1, name: 'Roman'},
        {id: 2, name: 'Ruslan'},
        {id: 3, name: 'Yeugene'},
        {id: 4, name: 'Serij'},
        {id: 5, name: 'Petr'},
    ],
    message: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'Hi,whats up?', likesCount: 15},
        {id: 3, message: 'Hello!?', likesCount: 18},
        {id: 4, message: 'Duuuuuude!', likesCount: 17},
        {id: 5, message: 'Yo!', likesCount: 19},
    ]
}


const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6,
                message: action.newMessageBody,
                likesCount: 0
            };
            return {
                ...state,
                message: [...state.message, newMessage]
            }

        }
        // case UPDATE_NEW_MESSAGE_TEXT: {
        //     return  {
        //         ...state,
        //         newMessageText: action.message
        //     }
        // }
        default:
            return state
        }
    }


    export default messageReducer

    export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

    // export const updateNewMessageTextActionCreator = (message) =>
    //     ({type: UPDATE_NEW_MESSAGE_TEXT, message: message})


// rerender(store)


//store - OOP

