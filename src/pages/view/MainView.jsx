import '../css/MainView.css';
import mainLogo from '../../assets/images/image-main-resize.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function MainView() {
  return (
    <div className="App">
      <div className="container">
        <img src={mainLogo} />
        <Link to="/textChat" style={{ textDecoration: 'none' }}>
          <div className="textBox">
            <p className="text">텍스트로 물어보기</p>
          </div>
        </Link>
        <Link to="/voiceChat" style={{ textDecoration: 'none' }}>
          <div className="voiceBox">
            <p className="voice">음성으로 물어보기</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

const Introduce = () => {
  const navigate = useNavigate();

  const goToTextChat = () => {
    navigate('/textChat');
  };

  const goToVoiceChat = () => {
    navigate('/voiceChat');
  };
};
export default MainView;
