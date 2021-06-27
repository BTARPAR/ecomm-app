import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from "moment";
import {Link} from "react-router-dom";
import '../styles/slot.scss'

const Slot = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('/orders', {
            method: 'GET',
            headers: {
                credentials: 'include'
            }
        })
            .then((res) => res.json())
            .then((orders) => {
                setOrders(orders)
            })
    }, [])

    const renderOrders = orders.map((order) => {
        const {date, total, cc_no, _id} = order
        const FORMATTED_DATE = moment(date).format('L')
        return (
            <div className='column grow pointer' key={_id}>
                <Link to={`/order/${_id}`}>
                    <div className='card'>
                        <h3>Date: {FORMATTED_DATE}</h3>
                        <p>Amount: {total}</p>
                        <p>Card used: xxxx-{cc_no}</p>
                    </div>
                    <span>
                    <FontAwesomeIcon icon={'arrow-alt-circle-right'} size={'2x'}/>
                </span>
                </Link>
            </div>

        )
    })
    return (
        <div className='slot-container flex flex-wrap'>
            {renderOrders}
        </div>
    )
}

export default Slot