import React from 'react';
import { useQuery } from 'react-query'
import IsLoading from '../Hooks/IsLoading';
import AllOrdersRow from './AllOrdersRow';
const AllOrders = () => {
    const { isLoading, error, data } = useQuery('allOrders', () =>
    fetch("https://powerful-falls-58401.herokuapp.com/allOrders", {
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
        <div className='container'>
        <h1 className='text-center admin-title  fw-bold  pt-4 py-2' >Users List and Create Admin</h1>
        <div className='table-responsive admin-list'>
        <table class="table table-striped bg-white table-hover  text-center">
             <thead className=''>
                 <tr className='table-header'>
                     <th scope="col">No</th>
                     <th scope="col">Product Name</th>                    
                     <th scope="col">Car Image</th>
                     <th scope="col">Email</th>                     
                 </tr>
             </thead>
             <tbody>
                {
                 data.map((order , index) => <AllOrdersRow order={order} key={order._id} index={index}></AllOrdersRow>)
                }
             </tbody>
         </table>
        </div>

     </div>
    );
};

export default AllOrders;