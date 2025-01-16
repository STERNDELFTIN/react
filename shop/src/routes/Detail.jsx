import { useParams } from "react-router-dom";
import styled from 'styled-components'

let Btn = styled.button`
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'black' ? 'white' : 'black' };
  padding: 6px 10px;
  font-weight: bold;
  border-radius: 3px;
`
let Box = styled.div`
  background : grey;
  padding: 10px;
`

let NewBtn = styled(Btn)`
  font-size: 20px;
`

function Detail( props ) {
  let {id} = useParams(); // URL에 입력한 id
  // URL에 입력한 id와 
  let shoes = props.shoes.filter( item => item.id == id )[0]; // 객체로 반환됨(조건에 맞는 첫 번째 요소만)
  if (!shoes) {
    return <div>해당 상품을 찾을 수 없습니다.</div>;
  }
    return (
      <div className="container">
        <Box>
          <Btn bg="lightBlue">버튼</Btn>
          <Btn bg="coral">버튼</Btn>
          <Btn bg="black">버튼</Btn>
          <NewBtn bg="white">버튼</NewBtn>
        </Box>
        
        <div className="row">
          <div className="col-md-6">
            <img src={shoes.img} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{ shoes.title }</h4>
            <p>{shoes.content}</p>
            <p>{shoes.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    );
  }

  export default Detail;