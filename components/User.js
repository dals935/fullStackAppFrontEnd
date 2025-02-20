import React from 'react'

const User = () => {
  return (
      <tr>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>
                Test User FN
            </div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>
                Test User LN
            </div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>
                Test User Email
            </div>
        </td>
        <td className='text-right px-6 py-4 whitespace-nowrap'>
            <a href='#' className='text-indigo-600 hover:text-indigo-900 hover:cursor-pointer px-4'>Action 1</a>
            <a href='#' className='text-indigo-600 hover:text-indigo-900 hover:cursor-pointer'>Action 2</a>
        </td>
      </tr>
  )
}

export default User
