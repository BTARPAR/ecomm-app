import React, {useState} from "react";
import ResetPassword from "./RestPassword";
import Slot from "./Slot";
import '../styles/accountPage.scss'
import AccountNav from "./AccountNav";

const AccountPage = () => {
    const [active, setActive] = useState('order')
    return (
        <div className={'account-page'}>
            <AccountNav active={active} setActive={setActive}/>
            {active === 'password' && <div className='reset-container'>
                <ResetPassword/>
            </div>}
            {active === 'order' && <div className='order-container'>
                <Slot/>
            </div>}
        </div>
    )
}

export default AccountPage