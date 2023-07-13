import logo from './logo.svg';
import './App.css';
import Registration from './COMPONENT/Registration'
import  Home from './COMPONENT/Home';
import Login from './COMPONENT/Login';
import Ehr from './COMPONENT/Ehr';
import Report from './COMPONENT/Report';
import Appointment from './COMPONENT/Appointment';
import {Route,Routes} from 'react-router-dom';
import About from './COMPONENT/About';
function App() {
  return (
    <div className="App">
       <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Registration/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/ehr' element={<Ehr/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path="/about" element={<About/>}/>
       </Routes>
    </div>
  );
}

export default App;
