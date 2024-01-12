import './App.css';
import mainLogo from './assets/images/image-main-resize.png';

function App() {
  return (
    <div className="App">
      <div class="container">
        <img src={mainLogo} />
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

export default App;
