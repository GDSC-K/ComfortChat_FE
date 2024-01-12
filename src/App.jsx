import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainView from './pages/view/MainView';
import TextChat from './pages/view/TextChat';
import VoiceChat from './pages/view/VoiceChat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
        <Route path="/" element={<MainView />} />
        {/* <텍스트 /> */}
        <Route path="/textChat" element={<TextChat />} />
        {/* <음성 /> */}
        <Route path="/voiceChat" element={<VoiceChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
