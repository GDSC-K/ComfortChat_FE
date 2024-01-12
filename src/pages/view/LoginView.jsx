import '../css/LoginView.css';
import mainLogo from '../../assets/images/image-main-resize.png';
import backIcon from '../../assets/icons/icon-back.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BottomNav from '../../components/BottomNav.jsx';

function LoginView() {
  return (
    <div className="App">
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img id="backIcon" src={backIcon} />
        </Link>
        <img src={mainLogo} />
      </div>
      <p id="email">이메일 주소</p>
    </div>
  );
}
export default LoginView;
