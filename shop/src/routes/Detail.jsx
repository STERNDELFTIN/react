function DetailPage( {shoes} ) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={shoes[0].img} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{ shoes[0].title }</h4>
            <p>{shoes[0].content}</p>
            <p>{shoes[0].price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    );
  }

  export default DetailPage;