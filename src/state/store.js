// import profileReducer from "./profile-reducer";
// import messageReducer from "./message-reducer";
//
//
// let store = {
//     _state: {
//
//         profileData: {
//
//             postData: [
//                 {id: 1, message: "Hi, how are you", likesCount: 10},
//                 {id: 2, message: "Its my first post", likesCount: 8},
//                 {id: 3, message: "Its my second post", likesCount: 7},
//                 {id: 4, message: "Its my third post", likesCount: 16},
//                 {id: 5, message: "Yo!", likesCount: 14}
//             ],
//             newPostText: ""
//         },
//         messageData: {
//             dialogs: [
//                 {id: 1, name: 'Roman'},
//                 {id: 2, name: 'Ruslan'},
//                 {id: 3, name: 'Yeugene'},
//                 {id: 4, name: 'Serij'},
//                 {id: 5, name: 'Petr'},
//             ],
//             message: [
//                 {id: 1, message: 'Hi,how are you?', likesCount: 12},
//                 {id: 2, message: 'Hi,whats up?', likesCount: 15},
//                 {id: 3, message: 'Hello!?', likesCount: 18},
//                 {id: 4, message: 'Duuuuuude!', likesCount: 17},
//                 {id: 5, message: 'Yo!', likesCount: 19},
//             ],
//             newMessageText: ""
//         }
//     },
//     getState() {
//         return this._state;
//     },
//     _callSubscriber() {
//         console.log("State changed")
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     dispatch(action) {
//
//         this._state.profileData = profileReducer(this._state.profileData, action)
//         this._state.messageData = messageReducer(this._state.messageData, action)
//         this._callSubscriber(this._state)
//     }
// }
//
//
//
//
//
// // rerender(store)
//
//
// export default store;
// window.store = store;
// //store - OOP
//
