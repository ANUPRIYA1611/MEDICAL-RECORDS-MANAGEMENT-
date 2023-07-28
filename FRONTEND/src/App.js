import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Contact from './COMPONENT/Contact';
import Registration from './COMPONENT/Registration'
import  Home from './COMPONENT/Home';
import Login from './COMPONENT/Login';
import Ehr from './COMPONENT/Ehr';
import Report from './COMPONENT/Report';
import Doctor from './COMPONENT/Doctor';
import Appointment from './COMPONENT/Appointment';
import FeedForm from './COMPONENT/Feedback';
import store from './COMPONENT/store';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Registration/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/ehr' element={<Ehr/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/doctor" element={<Doctor/>}/>
          <Route path="/feed" element={<FeedForm/>}/>
       </Routes>
       </Provider>
    </div>
  );
}

export default App;
