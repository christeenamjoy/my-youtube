import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='col-span-2 w-48'>
        <ul className=' p-5 shadow-lg '>
            <Link to="/"><li className='py-2'>Home</li>
            </Link>
            <li className='py-2'>Shorts</li>
            <li className='py-2'>Subscriptions</li>
            <li className='pt-10 pb-2'>Library</li>
            <li className='py-2'>History</li>


        </ul>
    </div>
  )
}

export default SideBar