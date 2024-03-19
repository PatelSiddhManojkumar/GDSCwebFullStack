import logo from './logo.svg';
import './App.css';
import TextComponent from './components/TextComponent';
import { Profile } from './screens/Profile';
import Login from './screens/Login';
import { Register } from './screens/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      
        
      
      {/* <TextComponent/>
      <Profile/>
      <Login/>
      <Register/> */}

      {/* route == /login <Login /> */}
      {/* route == /register <Register /> */}

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
