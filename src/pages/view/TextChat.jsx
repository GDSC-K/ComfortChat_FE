import '../css/TextChat.css';
import backIcon from '../../assets/icons/icon-back.png';
import enterIcon from '../../assets/icons/icon-enter.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function TextChat() {
  return (
    <div className="App">
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img id="backIcon" src={backIcon} />
        </Link>
        <p id="twoIcon">
          <input type="text" placeholder="궁금한 점을 물어보세요!" />
          <div className="enter">
            <img src={enterIcon} className="enterIcon" />
          </div>
        </p>
      </div>
    </div>
  );
}

export default TextChat;
