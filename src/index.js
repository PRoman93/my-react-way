import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './state/redux-store';

export * from "react-router-dom";

let rerender = (state) => {
    ReactDOM.render(<App dispatch={store.dispatch.bind(store)}
                         state={state}
                         store={store}/>, document.getElementById('root'));
}
rerender(store.getState())

store.subscribe( () => {
    let state = store.getState();
    rerender(state)
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();








