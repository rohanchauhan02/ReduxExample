import "./App.css";
import React, {Component} from 'react';
import { Provider } from "react-redux";
import store from './store'

import PostForm from "./components/PostForm";
import Posts from "./components/Posts";




class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <>
          <PostForm />
          <Posts />
        </>
      </Provider>
    );
  }
}

export default App;
