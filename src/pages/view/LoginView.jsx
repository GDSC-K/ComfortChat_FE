import '../css/LoginView.css';
import React, { useState, useEffect } from 'react';
import mainLogo from '../../assets/images/image-main-resize.png';
import backIcon from '../../assets/icons/icon-back.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { loginUser } from '../../api/Users';
import BottomNav from '../../components/BottomNav.jsx';
import { setRefreshToken } from '../../storage/Cookie';
import { SET_TOKEN } from '../../store/Auth';
import axios from 'axios';

function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/accounts/signin', {
        email,
        password,
      });

      const { access_token, refresh_token } = response.data;

      // Store access token in Redux store
      // You need to have the appropriate action (SET_TOKEN) defined in your store/Auth.js file
      SET_TOKEN(access_token);

      // Set refresh token in cookies
      setRefreshToken(refresh_token);

      // Redirect or perform any additional actions upon successful login
    } catch (error) {
      // Handle login error (display error message, etc.)
      console.error('Login failed:', error);
    }
  };
  return (
    <div className="App">
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img id="backIcon" src={backIcon} />
        </Link>
        <img src={mainLogo} />
      </div>
      <p className="email">이메일 주소</p>
      <input type="text" className="bottom" value={email} onChange={(e) => setEmail(e.target.value)} />
      <p className="email">비밀번호</p>
      <input type="password" className="bottom" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Link to="/" style={{ textDecoration: 'none' }}>
      <button className="loginButton" onClick={handleLogin}>
        로그인
      </button>
      </Link>
      <Link to="/signup" style={{ textDecoration: 'none' }}>
      <button className="loginButton" id="signup">
        가입하러 가기
      </button>
      </Link>
    </div>
  );
}
export default LoginView;
