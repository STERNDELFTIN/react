import { useParams } from "react-router-dom";

function Detail( {shoes} ) {
  let {id} = useParams();
  const isExist = shoes.id.includes(id);
  shoes.find((item) => {
    return item.id == id;
  });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={shoes[id].img} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{ shoes[id].title }</h4>
            <p>{shoes[id].content}</p>
            <p>{shoes[id].price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    );
  }

  export default Detail;