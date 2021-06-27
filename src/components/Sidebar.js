import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {sidebarHandler} from "../actions";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import '../styles/sidebar.scss'

const Sidebar = () => {
    const {sidebar, loggedIn} = useSelector((state) => state.preference);
    const dispatch = useDispatch()

    const [dropdown, setDropDown] = useState('')

    const dropDownHandler = (selected) => {
        if (dropdown === selected) {
            setDropDown('')
        } else {
            setDropDown(selected)
        }
    }

    return (
        <div id="mySidenav" className="sidenav" style={{
            width: sidebar ? '250px' : '',
        }}>
            <span className="closebtn" onClick={() => dispatch(sidebarHandler())}>&times;</span>

            {loggedIn && <span className='ma3'><Link to='/account'>My account</Link></span>}

            <span className="dropdown-btn ma3" onClick={() => dropDownHandler('electronics')}>
                Electronics
                <FontAwesomeIcon icon={'caret-down'}/>
            </span>

            {dropdown === 'electronics' && <span className="dropdown-container">
                <Link to='/search/laptop'>Laptop</Link>
                <Link to='/search/phone'>Phone</Link>
                <Link to='/search/desktop'>Desktop</Link>
            </span>}

            <span className="dropdown-btn ma3" onClick={() => dropDownHandler('outdoors')}>
               Sports & Outdoors
                <FontAwesomeIcon icon={'caret-down'}/>
            </span>

            {dropdown === 'outdoors' && <span className="dropdown-container">
                <Link to='/search/volleyball'>Volleyball</Link>
                <Link to='/search/football'>Football</Link>
            </span>}

            <span className='ma3'><Link to='/search/cards'>Gift Cards</Link></span>

            <span className='ma3'><Link to='/search/cards'>Toy, games & Video Games</Link></span>
        </div>
    )
}

export default Sidebar