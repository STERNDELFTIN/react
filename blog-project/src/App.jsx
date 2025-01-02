/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [title, ft] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [like, onLike] = useState(0);
  let [title2, changeTitle] = useState('남자 코트 추천');

  return (
    <div className='App'>

      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{ title2 } <span onClick = {()=>onLike(like+1)} >👍</span> { like } </h4>
        <p>01월 02일 발행</p>
        <button onClick={()=>{changeTitle('여자 코트 추천')}}>확인</button>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>01월 02일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>01월 02일 발행</p>
      </div>

    </div>
  );
}

export default App;
