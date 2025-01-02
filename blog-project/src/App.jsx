/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {

  let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [like, onLike] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className='App'>

      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <div className="button-container">
      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        changeTitle(copy);
      }}>오름차순 정렬</button>
      <button onClick={()=> {
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          changeTitle(copy);
          }}>수정</button>
      </div>

      <div className="list">
        <h4>{ title[0] } <span onClick = {()=>onLike(like+1)} >👍</span> { like } </h4>
        <p>01월 02일 발행</p>
      </div>

      <div className="list">
        <h4>{ title[1] }</h4>
        <p>01월 02일 발행</p>
      </div>

      <div className="list">
        <h4 onClick={()=>{ setModal(!modal) }}>{ title[2] }</h4>
        <p>01월 02일 발행</p>
      </div>

      {/* 삼항 연산자 */}
      {
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  );
}

export default App;
