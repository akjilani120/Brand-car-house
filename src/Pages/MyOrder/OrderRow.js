import React from 'react';

const OrderRow = ({order, index}) => {
    const {email , product , productImg, totalPrice} =order
    return (
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{product}</td>
        <td><img height='30px' width="30px" src={productImg}></img></td>
        <td>{email}</td>
        <td>{totalPrice}</td>
        <td><button className='btn btn-primary'> Payment </button></td>
        <td className=''> <button className='btn btn-danger'> X </button> </td>        
       </tr>
    );
};

export default OrderRow;