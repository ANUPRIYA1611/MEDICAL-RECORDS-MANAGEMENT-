import logo from './logo.svg';
import './App.css';
import Registration from './COMPONENT/Registration'
import  Home from './COMPONENT/Home';
import Login from './COMPONENT/Login';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Logina' element={<Registration/>}/>
          <Route path='/Registrationa' element={<Home/>}/>
       </Routes>
    </div>
  );
}

export default App;
