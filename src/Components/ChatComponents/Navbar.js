import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import './ChatComponents.scss';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className="user">
        <span>{currentUser.displayName}</span>
      </div>
    </div>
  )
}

export default Navbar