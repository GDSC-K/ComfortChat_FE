import '../css/SignupView.css';
import mainLogo from '../../assets/images/image-main-resize.png';
import backIcon from '../../assets/icons/icon-back.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BottomNav from '../../components/BottomNav.jsx';

import React, { useState } from 'react';
import axios from 'axios';

function SignupView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [guardianEmail, setGuardianEmail] = useState('');


  const handleSignUp =  async(e) => {
    e.preventDefault(); 
    try {
        const response = await axios.post('http://127.0.0.1:8000/accounts/signup', {
          email,
          password,
          name,
          guardian: guardianEmail,
        });
    
        console.log(response.data); // 서버로부터의 응답을 콘솔에 출력
    
        // 여기에서 필요한 UI 업데이트 또는 리다이렉션을 수행합니다.
      } catch (error) {
        console.error('회원가입 실패:', error.message);
        // 에러 처리 로직을 추가할 수 있습니다.
      }
  };

  return (
    <div className="App">
      <div className="container">
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <img id="backIcon" src={backIcon} alt="뒤로가기 아이콘" />
        </Link>
      </div>
      <p id="signupTitle">회원가입</p>
      <p className="email">이름</p>
      <input type="text" className="bottom" value={name} onChange={(e) => setName(e.target.value)} />
      <p className="email">이메일 주소</p>
      <input type="text" className="bottom" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <p className="email">비밀번호</p>
      <input type="password" className="bottom" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <p className="email">보호자 이메일</p>
      <input type="text" className="bottom" value={guardianEmail} onChange={(e) => setGuardianEmail(e.target.value)}/>
      <button className="signupButton" onClick={handleSignUp}>가입하기</button>
    </div>
  );
}

export default SignupView;

/*
import '../css/SignupView.css';
import mainLogo from '../../assets/images/image-main-resize.png';
import backIcon from '../../assets/icons/icon-back.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BottomNav from '../../components/BottomNav.jsx';

import React, { useState } from 'react';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [guardianEmail, setGuardianEmail] = useState('');

function SignupView() {
  return (
    <div className="App">
      <div className="container">
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <img id="backIcon" src={backIcon} />
        </Link>
      </div>
      <p id="signupTitle">회원가입</p>
      <p className="email">이름</p>
      <input type="text" className="bottom" />
      <p className="email">이메일 주소</p>
      <input type="text" className="bottom" />
      <p className="email">비밀번호</p>
      <input type="text" className="bottom" />
      <p className="email">보호자 이메일</p>
      <input type="text" className="bottom" />
      <button className="signupButton">가입하기</button>
    </div>
  );
}
export default SignupView;
*/