import '../css/VoiceChat.css';
import backIcon from '../../assets/icons/icon-back.png';
import PlayIcon from '../../assets/icons/icon-play.png';
import PauseIcon from '../../assets/icons/icon-pause.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

const VoiceChat = () => {
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [recording, setRecording] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleRecording = () => {
    if (!recording) {
      // Start recording
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const newAnalyser = audioCtx.createScriptProcessor(0, 1, 1);
      setAnalyser(newAnalyser);

      function makeSound(newStream) {
        const newSource = audioCtx.createMediaStreamSource(newStream);
        setSource(newSource);
        newSource.connect(newAnalyser);
        newAnalyser.connect(audioCtx.destination);
      }

      navigator.mediaDevices.getUserMedia({ audio: true }).then((newStream) => {
        const newMediaRecorder = new MediaRecorder(newStream);
        newMediaRecorder.start();
        setStream(newStream);
        setMedia(newMediaRecorder);
        makeSound(newStream);

        newAnalyser.onaudioprocess = function (e) {
          if (e.playbackTime > 180) {
            newStream.getAudioTracks().forEach(function (track) {
              track.stop();
            });
            newMediaRecorder.stop();
            newAnalyser.disconnect();
            audioCtx.createMediaStreamSource(newStream).disconnect();

            newMediaRecorder.ondataavailable = function (e) {
              setAudioUrl(e.data);
              setRecording(false);
              sendVoiceToAPI(e.data);
            };
          } else {
            setRecording(true);
          }
        };
      });
    } else {
      // Stop recording
      media.ondataavailable = function (e) {
        setAudioUrl(e.data);
        setRecording(false);

        sendVoiceToAPI(e.data);
      };

      stream.getAudioTracks().forEach(function (track) {
        track.stop();
      });

      media.stop();

      analyser.disconnect();
      source.disconnect();
    }
  };

  const sendVoiceToAPI = (voiceData) => {
    const responseMessage = 'AI가 응답한 메시지';
    setMessages((prevMessages) => [...prevMessages, responseMessage]);
  };

  return (
    <div className="App">
      <div className="voice-box">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="back-button">
            <img src={backIcon} alt="Back" />
          </div>
        </Link>
        <MessageList messages={messages} />
        <button className="toggle-btn" onClick={toggleRecording}>
          <img
            src={recording ? PauseIcon : PlayIcon}
            alt={recording ? 'Stop' : 'Record'}
          />
        </button>
      </div>
    </div>
  );
};

const MessageList = ({ messages }) => (
  <div className="messages-list">
    {messages.map((message, index) => (
      <Message key={index} text={message} />
    ))}
  </div>
);

const Message = ({ text }) => (
  <div className="ai-message">
    <p>
      <b>AI</b>: {text}
    </p>
  </div>
);

export default VoiceChat;
