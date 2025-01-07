/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {

let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
let [titleIndex, setTitleIndex] = useState(0);
let [value, changeValue] = useState('');

let [aloneLike, onLike] = useState(0);
let [like, setLike] = useState([0,0,0]);
let [likeIndex, setLikeIndex] = useState(0);

let [modal, setModal] = useState(false);

let [currentDate, setCurrentDate] = useState(''); // 현재 날짜 가져오기
let [currentTime, setCurrentTime] = useState(''); // 현재 시간 가져오기

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
    title.map(function(_title, i){
      return (
        <div className="list" key={i}>
          <h4 onClick={()=>{
            setModal(true); setTitleIndex(i); setLikeIndex(i);
          }}>{ _title } <span onClick={()=>{ 
            const copy = [...like];
            copy[i]++;
            setLike(copy);
           }}>👍</span> { like[i] } </h4>

          <p> { currentDate[i] } </p>
          <p> { currentTime[i] } </p>

          <button className='delete-btn' onClick={() => {
            let copy = [...title];
            copy.splice(i, 1); {/* 배열 데이터 삭제 */}
            changeTitle(copy);

            const likeCopy = [...like];
            likeCopy.splice(i, 1);
            setLike(likeCopy);
        
            const dateCopy = [...currentDate];
            dateCopy.splice(i, 1);
            setCurrentDate(dateCopy);
        
            const timeCopy = [...currentTime];
            timeCopy.splice(i, 1);
            setCurrentTime(timeCopy);
          }}>삭제</button>
        </div>
      )
    })
  }

<form className='title-insert'>
<input onChange = {(e) => {
    changeValue(e.target.value);
  }} value={value} /> {/* value속성을 value 상태로 유지하여 changeValue 함수의 변경 적용 */}
  <button onClick = {(e) => {
    e.preventDefault(); // 버튼 클릭 시 페이지 리로딩 방지

    if (value.trim() === '') return; // 빈 값 방지

    const copy = [...title];
    copy.unshift(value);
    changeTitle(copy);
    changeValue(''); {/* 입력 값 비우기 */}

    const likeCopy = [...like];
    likeCopy.unshift(0);
    setLike(likeCopy);

    const dateCopy = [...currentDate];
    dateCopy.unshift(new Date().toLocaleDateString());
    setCurrentDate(dateCopy);

    const timeCopy = [...currentTime];
    timeCopy.unshift(new Date().toLocaleTimeString());
    setCurrentTime(timeCopy);
  }}>글발행</button>
</form>

  {/* 삼항 연산자 */}
  {
  modal == true ? <Modal titleIndex={ titleIndex } title={ title } date={ currentDate } time={ currentTime } content='상세내용입니다.' /> : null
  }

</div>
);
}

function Modal(props){
return (
<div className='modal'>
    <h4>{ props.title[props.titleIndex] }</h4>
    <p> { props.date } </p>
    <p> {props.time } </p>
    <p> { props.content } </p>
</div>
);
}

export default App;