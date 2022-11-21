// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import logger from "redux-logger";
// const BUY_CAKE = "BUY_CAKE";

// function buyCake() {
//     return {
//         type: BUY_CAKE,
//         info: "First redux action",
//     };
// } //ACTION
// function importCake() {
//     return {
//         type: "IMPORT_CAKE",
//         info: "Second redux action",
//     };
// }
// const initialState = {
//     numOfCakes: 10,
// };
// const initialimportState = {
//     numOfImportCakes: 20,
// };
// const initreducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1,
//             };
//         default:
//             return state;
//     }
// }; //REDUCER
// const importreducer = (state = initialimportState, action) => {
//     switch (action.type) {
//         case "IMPORT_CAKE":
//             return {
//                 ...state,
//                 numOfImportCakes: state.numOfImportCakes + 2,
//             };
//         default:
//             return state;
//     }
// };
// const rootReducer = combineReducers({
//     cake: initreducer,
//     importcake: importreducer,
// });
// // const myLogger = (store) => (next) => (action) => {
// //     console.log("logged action", action);
// //     next(action);
// // };
// const store = configureStore(
//     {
//         reducer: rootReducer ,
//         middleware: [logger, ...getDefaultMiddleware()],
//     },

// ); //store
// console.log("InitialState ", store.getState());
// const unsubscribe = store.subscribe(() =>
//     console.log("updated state", store.getState())
// );
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(importCake());
// store.dispatch(importCake());
// unsubscribe();

import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
const initialState = {
    loading: false,
    users: [],
    error: "",
};
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    };
};
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    };
};
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
};
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                //response.data is array of users
                const users = response.data.map((user) => user.id);
                // console.log(users);
                dispatch(fetchUsersSuccess(users));
            })

            .catch((error) => {
                //error.message is error description
                dispatch(fetchUsersFailure(error.message));
            });
    };
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: "",
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload,
            };
    }
};
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(fetchUsers());
