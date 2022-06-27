import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query'
import IsLoading from '../Hooks/IsLoading';
import OrderRow from './OrderRow';
const MyOrder = () => {
    const [user] = useAuthState(auth)
    const email = user?.email
    const url = `http://localhost:5000/myOrders?email=${email}`
    const { isLoading, error, data: myorders, refetch } = useQuery('aboutCar', () =>
        fetch(url)
            .then(res => res.json()
            )

    )
    if (isLoading) {
        return <IsLoading></IsLoading>
    }
    
    return (
        <div>
            <h1>I am MY order page</h1>
           <div className='container'>
            <div className='row'>
            <div>
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
                        myorders.map((order , index) => <OrderRow order={order} index={index} key={order._id}></OrderRow>)
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