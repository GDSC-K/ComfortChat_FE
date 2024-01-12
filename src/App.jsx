import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainView from './pages/view/MainView';
import TextChat from './pages/view/TextChat';
import VoiceChat from './pages/view/VoiceChat';
import BottomNav from './components/BottomNav';
import RecentView from './pages/view/recentView';
import MyPage from './pages/view/MyPage';
import LoginView from './pages/view/LoginView';

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
        {/* <최근 질문 내역 /> */}
        <Route path="/recentView" element={<RecentView />} />
        {/* <마이 페이지 /> */}
        <Route path="/myPage" element={<MyPage />} />
        {/* <로그인 /> */}
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
