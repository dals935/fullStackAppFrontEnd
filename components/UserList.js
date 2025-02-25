"use client";
import React, { useEffect, useState } from 'react';
import User from './User'

const UserList = ({ user }) => {
const USER_API_BASE_URL = "http://localhost:8085/api/v1/users";
const [users, setusers] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetcheData = async () => {
      setLoading(true)
      try {
          const respone = await fetch(USER_API_BASE_URL, {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
              },
          });
          const users = await respone.json();
          console.log(respone)
          setusers(users) 
      } catch (error) {
          console.log(error);
      }
      setLoading(false);
    };
    fetcheData();
  }, [user]);


  return (
    <div className="container mx-auto my-8">
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>First Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Last Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Email</th>
                        <th className='text-right font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Action</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className='bg-white'>
                        {users?.map((user) => (
                            <User user={user} key={user.id}/>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    </div>
  )
}

export default UserList
