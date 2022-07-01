import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query'
import IsLoading from '../Hooks/IsLoading';
import OrderRow from './OrderRow';
import './Myorder.css'
import Modal from '../Hooks/Modal';
const MyOrder = () => {
    const [user] = useAuthState(auth)
    const email = user?.email
    const url = `http://localhost:5000/myOrders?email=${email}`
    const { isLoading, error, data, refetch } = useQuery('myorders', () =>
        fetch(url, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json()
            )

    )
    if (isLoading) {
        return <IsLoading></IsLoading>
    }
    let showError;
    if (error) {
        showError = error
    }
   

    return (
        <div className='my-order-head '>
            <div className='text-center'>
                <h1 className=' text-white display-2 order-title my-4'> My car orders</h1>
             
               

               
                
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='table-responsive'>
                        <table class="table text-center table-success table-striped table-hover ">
                            <thead>
                                <tr className='table-dark'>
                                    <th scope="col">No</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Product Image</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Price </th>
                                    <th scope="col">Payment </th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((order, index) => <OrderRow refetch={refetch} order={order} index={index} key={order._id}></OrderRow>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;