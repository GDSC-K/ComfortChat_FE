import './App.css';
import mainLogo from './assets/images/image-main.jpg';

function App() {
  return (
    <div className="App">
      <div class="container">
        <img src={mainLogo} />
        <div class="textBox">
          <span class="text">텍스트로 물어보기</span>
        </div>
      </div>
    </div>
  );
}

export default App;
