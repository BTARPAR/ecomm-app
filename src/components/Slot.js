import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from "moment";
import {Link} from "react-router-dom";
import '../styles/slot.scss'
import {API_URL} from "../utils/constant";

const Slot = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(API_URL('/orders'), {
            method: 'GET',
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((orders) => {
                setOrders(orders)
            })
    }, [])

    const renderOrders = orders.map((order) => {
        console.log({order})

        const {date, total, cc_no, _id} = order
        const FORMATTED_DATE = moment(date).format('L')
        return (
            <div className='column grow pointer' key={_id}>
                <Link to={`/order/${_id}`}>
                    <div className='card'>
                        <h3>Date: {FORMATTED_DATE}</h3>
                        <p>Amount: $ {Number(total).toFixed(2)}</p>
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