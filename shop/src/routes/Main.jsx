import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Main( props ) {
  let originShoes = props.shoes;
  // const [shoes, setShoes] = useState(props.shoes);
  // const [shoes, setShoes] = useState(null);
  const [clickMore, setClickMore] = useState(0);
  const [loading, setLoading] = useState(false);

  // clickMore 상태가 변경될 때마다 실행
  useEffect(()=>{
    console.log(clickMore);
    if (clickMore == 1)
      SeeMore ({
        url: 'https://codingapple1.github.io/shop/data2.json',
        shoes: props.shoes,
        setShoes: props.setShoes,
        setLoading
      });
    else if (clickMore == 2)
      SeeMore ({
        url: 'https://codingapple1.github.io/shop/data3.json',
        shoes: props.shoes,
        setShoes: props.setShoes,
        setLoading
      });
    else {
      setClickMore(0);
      props.setShoes([...originShoes]);
    }
  }, [clickMore]);

    return (
      <>
        <div className='main-bg' style={ { backgroundImage: `url(${props.mainBg})`}}></div>
  
          <div className='container'>
            <div className='row'>
            { props.shoes ? (props.shoes.map((item, index) => {
                  return <ShoesInfo key={ index } img={item.img} title={item.title} price={item.price} id = {item.id} />
                })) : (<p>로딩중...</p>)
            }
            </div>
          </div>

          <button className='seemoreBtn' onClick={()=>{
            setClickMore(clickMore+1);
          }} disabled={loading}> { loading ? '로딩중' : '더보기' } </button>

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

  function SeeMore(props) {
    props.setLoading(true);

    axios.get(props.url)
    .then((result) => {
      // console.log(result.data);
      let copy = [...props.shoes, ...result.data];
      props.setShoes(copy);

      // 의도적으로 setTimeout을 주어 로딩 확인
      setTimeout(() => {
        props.setShoes(copy); // 상태 업데이트
        props.setLoading(false); // 로딩 상태 종료
      }, 1000); // 2초 지연
    })
    .catch(()=>{
      console.log('실패');
      setTimeout(() => {
        props.setShoes(copy); // 상태 업데이트
        props.setLoading(false); // 로딩 상태 종료
      }, 1000); // 2초 지연
    })
  }

  export default Main;