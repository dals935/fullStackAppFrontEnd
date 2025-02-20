import React from 'react'
import User from './User'

const UserList = () => {
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
                <tbody className='bg-white'>
                    <User/>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList
