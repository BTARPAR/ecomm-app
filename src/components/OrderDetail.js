import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import moment from "moment";
import '../styles/order-detail.scss'

const OrderDetail = () => {
    const [order, setOrder] = useState({})
    const params = useParams()

    const fetchOrder = async () => {
        await fetch(`/order/?id=${params.id}`, {
            method: 'GET',
            headers: {
                credentials: 'included'
            }
        })
            .then((res) => res.json())
            .then((res) => setOrder(res))
    }

    useEffect(() => {
        fetchOrder()
    }, )

    const {date, total, cc_no, fullname, email, street, state, city, zip, cc_name, products = []} = order
    const FORMATTED_DATE = moment(date).format('L')
    return (
        <div className='order-detail'>
            <div className='slot-container flex flex-wrap'>
                <div className='column pointer flex'>
                    <div className='card grow tc ma2 w-100'>
                        <h3>Order placed on</h3>
                        <p>{FORMATTED_DATE}</p>
                    </div>
                </div>

                <div className='column pointer flex'>
                    <div className='card grow tc ma2 w-100'>
                        <h3>Recipient Name</h3>
                        <p>{fullname}</p>
                    </div>
                </div>

                <div className='column pointer flex'>
                    <div className='card grow tc ma2 w-100'>
                        <h3>Email</h3>
                        <p>{email}</p>
                    </div>
                </div>

                <div className='column pointer flex'>
                    <div className='card grow tc ma2 w-100'>
                        <h3>Address</h3>
                        <p>{street}</p>
                        <p>{city + ', ' + state + ', ' + zip}</p>
                    </div>
                </div>
                <div className='column pointer flex'>
                    <div className='card grow tc ma2 w-100'>
                        <h3>Card Details</h3>
                        <p>{cc_name}</p>
                        <p>xxxx-xxxx-{cc_no}</p>
                    </div>
                </div>

                <div className='column pointer flex'>
                    <div className='card grow tc ma2 w-100'>
                        <h3>Total Amount</h3>
                        <p>$ {Number(total).toFixed(2)}</p>
                    </div>
                </div>
            </div>

            <div className='slot-container flex flex-wrap'>
                <div className='column pointer flex'>
                    <div className='card tc ma2 display-products'>
                        <h3>Product Purchased</h3>
                    </div>
                </div>
            </div>

            <div className='slot-container flex flex-wrap'>
                <div className='column pointer flex'>
                    <div className='card tc ma2 display-products'>
                        {products.map((product) => {
                            return (
                                <Link to={`/product-detail/${product._id}`}>
                                    <div className='flex grow justify-around items-center ma3'>
                                        <img src={product.image_url} alt={product.product_name} width='100'/>
                                        <p>{product.product_name}</p>
                                        <p>{product.count}</p>
                                        <p>$ {product.price * product.count}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail