import React from 'react'
import {BiUserCheck} from 'react-icons/bi'
import {AiOutlineFullscreenExit} from 'react-icons/ai'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className='text-white  py-4 flex items-center gap-x-20 justify-around w-full shadow-md shadow-gray-600'>
     <ul className='flex items-center gap-x-8 text-lg font-bold tracking-wide'>
     <li> <Link to='/'>ADD TASK</Link> </li>
        <li> <Link to='/tasklist'>TASK LIST</Link> </li>
     </ul>
     <div className='flex items-center gap-x-8 text-2xl font-bold'>
          <div>
          <Link to="/register"> <AiOutlineFullscreenExit/> </Link>
          </div>
     </div>
    </header>
  )
}

export default Header