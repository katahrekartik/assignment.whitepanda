import React, {Component} from 'react';
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

const store = ConfigureStore();

class App extends Component{
  
  constructor(props){
    super(props);
  }

  render(){
    return(
      // Provide the store gloabally
      <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;
