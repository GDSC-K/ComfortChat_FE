import '../css/MainView.css';
import mainLogo from '../../assets/images/image-main-resize.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function MainView() {
  return (
    <div className="App">
      <div class="container">
        <img src={mainLogo} />
        <Link to="/textChat" style={{ textDecoration: 'none' }}>
          <div class="textBox">
            <p class="text">텍스트로 물어보기</p>
          </div>
        </Link>
        <Link to="/voiceChat" style={{ textDecoration: 'none' }}>
          <div class="voiceBox">
            <p class="voice">음성으로 물어보기</p>
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
