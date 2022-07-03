import React from 'react';

const AllOrdersRow = ({order , index}) => {
    const {email , product , productImg  } =order
    return (
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{product}</td>
        <td><img height='30px' width="30px" src={productImg}></img></td>
        <td>{email}</td>
             
        
    </tr>
    );
};

export default AllOrdersRow;