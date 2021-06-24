import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {sidebarHandler} from "../actions";
import '../styles/sidebar.scss'

const Sidebar = () => {
    const {sidebar} = useSelector((state) => state.preference);
    const dispatch = useDispatch()
    return (
        <div id="mySidenav" className="sidenav" style={{
            width: sidebar ? '250px' : '',
        }}>
            <span className="closebtn" onClick={() => dispatch(sidebarHandler())}>&times;</span>
            <span>Electronics</span>
            <span>Sports & Outdoors</span>
            <span>Gift Cards</span>
            <span>Toy, games & Video Games</span>
        </div>
    )
}

export default Sidebar