import { useParams } from "react-router-dom";

function Detail( props ) {
  let {id} = useParams(); // URL에 입력한 id
  // URL에 입력한 id와 
  let shoes = props.shoes.filter( item => item.id == id )[0]; // 객체로 반환됨(조건에 맞는 첫 번째 요소만)
  if (!shoes) {
    return <div>해당 상품을 찾을 수 없습니다.</div>;
  }
    return (
      <div className="container">
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