import '../css/VoiceChat.css';
import backIcon from '../../assets/icons/icon-back.png';

function TextChat() {
  return (
    <div className="App">
      <div class="container">
        <img src={backIcon} />
        <div class="textBox">
          <p class="text">텍스트로 물어보기</p>
        </div>
        <div class="voiceBox">
          <p class="voice">음성으로 물어보기</p>
        </div>
      </div>
    </div>
  );
}

export default TextChat;
