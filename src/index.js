import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';


const globalState={
  hitungan:0
}

//create reducer
const rootReducer=(state=globalState,action)=>{
  if(action.type==='PLUS'){
    return{
      ...state,
      hitungan:state.hitungan+1
    }
  }
  if(action.type==='MINUS'){
    return{
      ...state,
      hitungan:state.hitungan-1
    }
  }
  return state;
}

//create store
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
