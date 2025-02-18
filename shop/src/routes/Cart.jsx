import { Table } from 'react-bootstrap';
import { useState } from 'react';

function Cart() {
    // 장바구니 데이터를 state에 보관해두고 데이터바인딩하기


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