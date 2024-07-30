/* App.js */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from "./components/Header";
import './styles/main.css'; /* 가운데 정렬 */
import Login from "./pages/Login";
import Home from "./components/Home";
import Register from './pages/Register';
import InitialUser from "./pages/InitialUser";
import FestivalInfo from './pages/FestivalInfo';


function App() {
  return (
    <Router>
      <div className='container'>
        <section className='contents'>
          <Header />
          {/* <BrowserView>
            브라우저 뷰입니다.
          </BrowserView>
          <MobileView>
            <p>모바일뷰입니다.</p>
          </MobileView> */}
          
          {/* 라우트 설정 */}
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/initialUser" element={<InitialUser />} />
            <Route path="/festival" element={<FestivalInfo />} /> 
          </Routes>
        </section>
      </div>
    </Router>
    
  );
}

export default App;