import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import store1 from './COMPONENT/store1'; 
import App from './App';

ReactDOM.render(
  <Provider store={store1}>
     <BrowserRouter>
     <App/>
     </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);