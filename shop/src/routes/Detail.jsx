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

  // Tab UI
  const [activeTab, setActiveTab] = useState(0); // tab 인덱스 번호
  const tabs = ["HTML", "CSS", "JS"];
  const contents = [ "HTML CONTENTS Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, temporibus cum soluta delectus itaque dolores labore cumque, aliquid beatae molestias possimus perferendis. Consequuntur enim aliquid nihil sint! Quasi, possimus! Placeat.", "CSS CONTENTS Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, temporibus cum soluta delectus itaque dolores labore cumque, aliquid beatae molestias possimus perferendis. Consequuntur enim aliquid nihil sint! Quasi, possimus! Placeat.", "JS CONTENTS Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, temporibus cum soluta delectus itaque dolores labore cumque, aliquid beatae molestias possimus perferendis. Consequuntur enim aliquid nihil sint! Quasi, possimus! Placeat." ];

    return (
      <div className="container detail-container">

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

        <TabUI tabs={tabs} contents={contents} activeTab={activeTab} setActiveTab={setActiveTab} />

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

  function TabUI({tabs, contents, activeTab, setActiveTab}) {
    
    // 탭이 변경될때마다 실행
    /* 리액트의 automatic batching 기능
    state 변경이 되고나서 재렌더링 한 번 */
    let [fade, setFade] = useState('');
    useEffect(() => {
      let fadeTime = setTimeout(()=> { setFade('end')}, 50)

      return ()=>{
        clearTimeout(fadeTime);
        setFade('');
      }
    }, [tabs]);

    return(
      <div className="tab-container">
      <div className="tab-btn">
        {
          tabs.map((tab, i) => (
            <button key={i} 
            onClick={()=>{setActiveTab(i)}}
            style={{
              backgroundColor : activeTab === i ? "#fdd553" : "#fff",
            }}>
              { tab }
            </button>
          ))
        }
      </div>
      <div className={`tab-box start ${fade}`}>
        <h2>{ tabs[activeTab] }</h2>
        { contents[activeTab] }
      </div>
    </div>
    );
  }

  export default Detail;