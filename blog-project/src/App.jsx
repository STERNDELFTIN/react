/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {

let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
let [titleIndex, setTitleIndex] = useState(0);
let [aloneLike, onLike] = useState(0);
let [like, setLike] = useState([0,0,0]);
let [modal, setModal] = useState(false);

return (
<div className='App'>

  <div className="black-nav">
    <h4>ReactBlog</h4>
  </div>

  {/* 버튼 */}
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

    {/* 모달창 띄우기 */}
    <button onClick={()=>setModal(!modal)}>모달창</button>
  </div>

  {/* 좋아요 */}
  <div className="like-button">
    <h4><span onClick={()=>onLike(aloneLike+1)}>👍</span> { aloneLike } </h4>
  </div>

  {/* map 이용해서 HTML 반복생성 */}
  {
    title.map(function(title, i){
      return (
        <div className="list" key={i}>
          <h4 onClick={()=>{
            setModal(true); setTitleIndex(i);
          }}>{ title } <span onClick={()=>{ 
            const copy = [...like];
            copy[i]++;
            setLike(copy);
           }}>👍</span> { like[i] } </h4>
          <p>01월 02일 발행</p>
        </div>
      )
    })
  }

  {/* 삼항 연산자 */}
  {
  modal == true ? <Modal titleIndex={ titleIndex } title={ title } date={'01월 02일 발행'} content='상세내용입니다.' /> : null
  }

</div>
);
}

function Modal(props){
return (
<div className='modal'>
    <h4>{ props.title[props.titleIndex] }</h4>
    <p> { props.date } </p>
    <p> { props.content } </p>
</div>
);
}

export default App;