import '../css/VoiceChat.css';
import backIcon from '../../assets/icons/icon-back.png';

function TextChat() {
  return (
    <div className="App">
      <div className="container">
        <img src={backIcon} />
        <div className="textBox">
          <p className="text">텍스트로 물어보기</p>
        </div>
        <div className="voiceBox">
          <p className="voice">음성으로 물어보기</p>
        </div>
      </div>
    </div>
  );
}

export default TextChat;
