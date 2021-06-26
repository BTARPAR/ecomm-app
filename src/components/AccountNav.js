import React from 'react';
import '../styles/account-nav.scss'

const AccountNav = ({
  active,
  setActive
}) => {
    return (
        <div className='sidebar'>
            <a className={`grow pointer ${active === 'order' && 'active'}`}
               onClick={() => setActive('order')}>
                My Orders
            </a>
            <a className={`grow pointer ${active === 'password' && 'active'}`}
               onClick={() => setActive('password')}>
                Change password
            </a>
        </div>
    )
}

export default AccountNav