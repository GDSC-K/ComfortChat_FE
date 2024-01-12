import '../css/recentView.css';
import backIcon from '../../assets/icons/icon-back.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function recentView() {
  return (
    <div className="App">
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img id="backIcon" src={backIcon} />
        </Link>
        <p id="twoIcon">
          <div className="play">
            <img src={playIcon} className="enterIcon" />
            <p id="question">질문하기</p>
          </div>
        </p>
      </div>
    </div>
  );
}

export default recentView;
