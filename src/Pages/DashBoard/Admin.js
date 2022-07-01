import React from 'react';
import { useQuery } from 'react-query'
import IsLoading from '../Hooks/IsLoading';
import AdminRow from './AdminRow';
const Admin = () => {
    const { isLoading, error, data, refetch } = useQuery('users', () =>
        fetch("http://localhost:5000/users", {
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
                        <th scope="col">Email</th>
                        <th scope="col">Make Admin</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {
                    data.map((user , index) => <AdminRow user={user} key={user._id} index={index} refetch = {refetch}></AdminRow>)
                   }
                </tbody>
            </table>
           </div>

        </div>
    );
};

export default Admin;