import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store.js';
import { setCount } from '../store.js';

function Cart() {
    // 장바구니 데이터를 state에 보관해두고 데이터바인딩하기
    let state = useSelector((state) => { return state }); // Redus store 가져와줌
    console.log(state);
    console.log(state.user);
    console.log(state.stock);

    // store의 state 중에 원하는 것만 골라서 가져올 수 있음
    let user = useSelector((state) => { return state.user; });

    // array / object
    let addedItems = useSelector((state) => { return state.addedItems; });
    console.log(addedItems);

    // store.js로 요청 보내주는 함수
    let dispatch = useDispatch();

    return (
        <div>
            { state.user }의 장바구니
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addedItems.map((item, i) =>
                            <tr key={i}>
                                <td>1</td>
                                <td>{ state.addedItems[i].name }</td>
                                <td>{ state.addedItems[i].count }</td>
                                <td>
                                    <button onClick={() => {
                                        // 누르면 state 변경하게
                                        // dispatch(changeName())
                                        dispatch(setCount(i))
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;