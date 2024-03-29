import '../css/recentView.css';
import backIcon from '../../assets/icons/icon-back.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BottomNav from '../../components/BottomNav.jsx';

function recentView() {
  return (
    <div className="App">
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img id="backIcon" src={backIcon} />
        </Link>
        <p id="recentTitle">최근에 물은 질문</p>
        <div className="recentList">
          <span className="Q">Q. </span>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default recentView;
