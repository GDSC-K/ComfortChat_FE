import '../css/VoiceChat.css';
import React, { useState, useCallback } from 'react';
import { getCookieToken } from '../../storage/Cookie';
import backIcon from '../../assets/icons/icon-back.png';
import PlayIcon from '../../assets/icons/icon-play.png';
import PauseIcon from '../../assets/icons/icon-pause.png';
import failIcon from '../../assets/icons/icon-cross-red.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function VoiceChat() {
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [disabled, setDisabled] = useState(true); // 😀😀😀
  const [messages, setMessages] = useState([]);

  const onRecAudio = () => {
    setDisabled(true); // 😀😀😀

    // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    // 마이크 사용 권한 획득
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        // 3분(180초) 지나면 자동으로 음성 저장 및 녹음 중지
        if (e.playbackTime > 180) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          // 메서드가 호출 된 노드 연결 해제
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
            sendVoiceToAPI(e.data);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };

  // 사용자가 음성 녹음을 중지 했을 때
  const offRecAudio = () => {
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function (e) {
      setAudioUrl(e.data);
      setOnRec(true);

      sendVoiceToAPI(e.data);
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    // 미디어 캡처 중지
    media.stop();

    // 메서드가 호출 된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();

    if (audioUrl) {
      URL.createObjectURL(audioUrl); // 출력된 링크에서 녹음된 오디오 확인 가능
    }

    // File 생성자를 사용해 파일로 변환
    const sound = new File([audioUrl], 'soundBlob.mp3', {
      lastModified: new Date().getTime(),
      type: 'audio/mp3',
    });

    // 😀😀😀
    setDisabled(false);
    console.log(sound); // File 정보 출력
    const formData = new FormData();
    formData.append('file', sound); // sound는 File 객체로 가정
    fetch('http://127.0.0.1:8000/chats/voice', {
      method: 'POST',
      headers: {
        Authorization: getCookieToken(), // JWT 토큰 추가
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('서버 응답:', data);
      })
      .catch((error) => {
        console.error('오류 발생:', error);
      });
  };

  const play = () => {
    const audio = new Audio(URL.createObjectURL(audioUrl)); // 😀😀😀
    audio.loop = false;
    audio.volume = 1;
    audio.play();
  };

  const sendVoiceToAPI = async () => {
    try {
      // API 호출 후 1초의 딜레이를 두고 메세지를 나타냄
      setTimeout(() => {
        const responseMessage =
          '"안전상의 이유로 페트병을 전자레인지에 넣는 것은 권장되지 않습니다. 페트병은 전자레인지에 사용되지 않도록 되어 있고, 또한 고온에 노출될 경우 유해한 물질이 발생할 수 있습니다. 따라서 페트병을 전자레인지에 넣지 않는 것이 좋습니다."';
        setMessages((prevMessages) => [...prevMessages, responseMessage]);
      }, 1000);
    } catch (error) {
      console.error('오류 발생:', error);
      // 오류 처리 로직 추가
    }
  };

  // 😀😀😀
  return (
    <div className="App">
      <div className="voice-box">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="back-button">
            <img src={backIcon} alt="Back" />
          </div>
        </Link>
        <MessageList messages={messages} />
        <button
          className={`Voice-btn ${onRec ? 'recording' : 'not-recording'}`}
          onClick={onRec ? onRecAudio : offRecAudio}
        ></button>
        <button className="Play-btn" onClick={play} disabled={disabled}>
          재생
        </button>
      </div>
    </div>
  );
}

const MessageList = ({ messages }) => (
  <div className="messages-list">
    {messages.map((message, index) => (
      <Message key={index} text={message} />
    ))}
  </div>
);

const Message = ({ text }) => (
  <div className="ai-message">
    <div className="cross">
      <img src={failIcon} alt="Fail" />
    </div>
    <p>
      <b>AI</b>: {text}
    </p>
  </div>
);

export default VoiceChat;
