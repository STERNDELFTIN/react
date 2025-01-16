import { useNavigate } from 'react-router-dom';
function Main( props ) {
  let shoes = props.shoes;
    return (
      <>
        <div className='main-bg' style={ { backgroundImage: `url(${props.mainBg})`}}></div>
  
          <div className='container'>
            <div className='row'>
            {
              shoes.map((item, index) => {
                return <ShoesInfo key={ index } img={item.img} title={item.title} price={item.price} id = {item.id} />
              })
            }
            </div>
          </div>
      </>
    );
  }

  function ShoesInfo(props) {
    const navigate = useNavigate();
    
    return (
      <div className='col-md-4'>
        <img src={props.img} width="80%"/>
        <h4 onClick={ () => { navigate(`/detail/${props.id}`) }}>{props.title}</h4>
        <p>{props.price}</p>
      </div>
    );
  }

  export default Main;