import { useState } from "react";
import "./App.css";
// import TextComponent from './components/TextComponent';
// import { Profile } from './screens/Profile';
import Login from "./screens/Login";
import { Register } from "./screens/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import House from "./screens/House";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {/* <TextComponent/>
      <Profile/>
      <Login/>
      <Register/> */}

      {/* route == /login <Login /> */}
      {/* route == /register <Register /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
          <Route path="/register" element={<Register isLogin={isLogin} />} />
          <Route path="/home" element={<House />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
