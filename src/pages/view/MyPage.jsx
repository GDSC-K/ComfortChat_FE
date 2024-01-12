import '../css/MyPage.css';
import backIcon from '../../assets/icons/icon-back.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BottomNav from '../../components/BottomNav.jsx';

function MyPage() {
  return (
    <div className="App">
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img id="backIcon" src={backIcon} />
        </Link>
        <p id="twoIcon">
          <div className="play">
            <p id="question">질문하기</p>
          </div>
        </p>
      </div>
      <BottomNav />
    </div>
  );
}

export default MyPage;
