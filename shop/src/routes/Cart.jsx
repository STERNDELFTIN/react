import { Table } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Cart() {
    // 장바구니 데이터를 state에 보관해두고 데이터바인딩하기
    let value = useSelector((state) => { return state }); // Redus store 가져와줌
    console.log(value);
    console.log(value.user);
    console.log(value.stock);

    // store의 state 중에 원하는 것만 골라서 가져올 수 있음
    let user = useSelector((state) => { return state.user; });

    // array / object
    let addedItems = useSelector((state) => { return state.addedItems; });
    console.log(addedItems);

    return (
        <div>
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
                    <tr>
                        <td>1</td>
                        <td>안녕</td>
                        <td>안녕</td>
                        <td>안녕</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;