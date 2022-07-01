import React from 'react';
import Modal from '../Hooks/Modal';

const OrderRow = ({order, index , refetch}) => {
    const {email , product , productImg, totalPrice , _id} =order
    const handleDelete =(id) =>{
        const url=(`http://localhost:5000/myOrders/${id}`)
        fetch(url ,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
        
            refetch()
        })
    }
    return (
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{product}</td>
        <td><img height='30px' width="30px" src={productImg}></img></td>
        <td>{email}</td>
        <td>{totalPrice}</td>
        <td><button className='btn btn-primary'> Payment </button></td>
        <td className=''> 
        <button type="button" className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">
        X
        </button>
        <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog ">
                        <div class="modal-content ">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Delete Alert</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Are Your Delete your order
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-bs-dismiss="modal">Close</button>
                                <button onClick={() => handleDelete(_id)} type="button" data-bs-dismiss="modal" class="btn btn-danger ">Confirm Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
         </td>        
       </tr>
    );
};

export default OrderRow;