import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from 'styled-components';

function Detail( props ) {
  //
  let {id} = useParams(); // URL에 입력한 id
  // URL에 입력한 id와 상품 id가 같은 것을 찾음
  let shoes = props.shoes.filter( item => item.id == id )[0]; // 객체로 반환됨(조건에 맞는 첫 번째 요소만)
  if (!shoes) {
    return <div>해당 상품을 찾을 수 없습니다.</div>;
  }

  // 타이머
  const [time, setTime] = useState(2); // 타이머 시간
  const [isActive, setActive] = useState(true); // 타이머 활성화 여부

  useEffect(() => {
    if (time > 0 && isActive) {
      const timer = setTimeout(() => { setTime(time-1) }, 1000 ); // 타이머 작동
      return () => { clearTimeout(timer) } // 중복 타이머 방지
    } else if (time <= 0) {
      setActive(false); // 타이머 비활성화
    }
  }, [time, isActive]);

  // input 내부에 숫자 외의 것을 입력 시 안내메세지 띄우기
  const [msg, setMsg] = useState(''); // 입력한 메세지
  const [alertMsg, setAlertMsg] = useState(false); // 경고 메세지

  useEffect(() => {
    /^\d*$/.test(msg) ? setAlertMsg(false) : setAlertMsg(true);
  }, [msg, alertMsg]);

    return (
      <div className="container">

        { isActive && (<Timer time={time} />) }
        
        <div className="row">
          <div className="col-md-6">
            <img src={shoes.img} width="100%" />
          </div>
          <div className="col-md-6">
            { alertMsg && <InputAlert /> }
            <input className="amount-input" onChange={(e) => setMsg(e.target.value)}></input>
            <h4 className="pt-5">{ shoes.title }</h4>
            <p>{shoes.content}</p>
            <p>{shoes.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>

      </div> 
    );
  }
  
  function Timer(props) {
    return(
      <div className="alert alert-warning">
        {props.time}초 이전까지 구매 시 할인
      </div>
    );
  }

  function InputAlert(props) {
    // 스타일
    let AlertDiv = styled.div`
      background-color: red;
      color: white;
      font-weight: bold;
      margin: 10px 0px;
      padding: 5px 10px;
    `;

    return(
      <AlertDiv>
        잘못된 숫자를 입력하셨습니다.
      </AlertDiv>
    );
  }

  export default Detail;