
function Main( props ) {
    return (
      <>
        <div className='main-bg' style={ { backgroundImage: `url(${props.mainBg})`}}></div>
  
          <div className='container'>
            <div className='row'>
            {
              props.shoes.map((item, index) => {
                return <ShoesInfo key={ index } img={item.img} title={item.title} price={item.price} />
              })
            }
            </div>
          </div>
      </>
    );
  }

  function ShoesInfo(props) {
    return (
      <div className='col-md-4'>
        <img src={props.img} width="80%"/>
        <h4>{props.title}</h4>
        <p>{props.price}</p>
      </div>
    );
  }

  export default Main;