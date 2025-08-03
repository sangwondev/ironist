import React, { useState, useRef } from 'react';
import './Form.css'; 

const Form = () : JSX.Element => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [isPublic, setIsPublic] = useState(false);
  const [duration, setDuration] = useState(0);
  const timerRef = useRef<number | null>(null);

  const formatTime = (secs: number) => {
    const h = String(Math.floor(secs / 3600)).padStart(2, '0');
    const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const startTimer = () => {
    if (timerRef.current !== null) return; // 이미 실행 중이면 무시
    timerRef.current = window.setInterval(() => {
      setDuration((prev) => prev + 1);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const postData = { title, content, duration, isPublic };
    console.log('Form submitted:', postData);
    // 여기에 fetch/axios로 API 요청 넣으면 됨
  };

  const handleReset = () => {
    console.log('글 목록 보기로 이동 (라우팅 필요)');
  };


    return (
        <form onSubmit={handleSubmit}>
        <input
          placeholder="제목"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />

        <textarea
          id="content"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setCharCount(e.target.value.length);
          }}
          onClick={startTimer}
          required
        />
        <input type="hidden" name="duration" value={duration} />

        <div>
          <p>글자 수: <span>{charCount}</span></p>
          <p>작성 시간: <span>{formatTime(duration)}</span></p>
        </div>
        <br />

        <label>
          <input
            type="checkbox"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
          /> 공개
        </label>
        <br />

        <div>
          <button type="submit">작성하기</button>
          <button type="button" onClick={handleReset}>글 목록 보기</button>
        </div>
      </form>
    );
}

export default Form;