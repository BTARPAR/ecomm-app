import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../styles/checkout.scss'
import {defaultAddress, defaultPayment} from "../utils/constant";
import {useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";

const Checkout = () => {
    const {cart} = useSelector((state) => state.preference);
    const history = useHistory()
    const [address, setAddress] = useState(defaultAddress)
    const [payment, setPayment] = useState(defaultPayment)
    const checkoutCart = Object.keys(cart)
    let total = 0
    const renderItem = checkoutCart.map((item) => {
        const {product_name, price, _id, count} = cart[item]
        const itemTotal = count * price
        total += itemTotal
        return (
            <p>
                <span>{count}</span>
                <span className='ph2'>x</span>
                <Link to={`/product-detail/${_id}`}>{product_name}</Link>
                <span className='price'>{itemTotal}</span>
            </p>
        )
    })
    const submitOrder = (e) => {
        e.preventDefault()
        fetch('/order', {method: 'POST'})
    }

    return (
        <div className='checkout-container'>
            <div className='row'>
                <div className='col-75'>
                    <form action={submitOrder}>
                        <div className='row flex-column'>
                            <div className='col-50 container br4 ma5 mr4'>
                                <h3>Billing Address</h3>
                                <label htmlFor='fname'>
                                    <FontAwesomeIcon icon={'user'}/>
                                    <span className='ph2'>Full Name</span>
                                </label>
                                <input type='text' id='fname' name='firstname' placeholder='John M. Doe'/>

                                <label htmlFor='email'>
                                    <FontAwesomeIcon icon={'envelope'}/>
                                    <span className='ph2'>Email</span>
                                </label>
                                <input type='text' id='email' name='email' placeholder='john@example.com'/>

                                <label htmlFor='adr'>
                                    <FontAwesomeIcon icon={'address-card'}/>
                                    <span className='ph2'>Address</span>
                                </label>
                                <input type='text' id='adr' name='address' placeholder='542 W. 15th Street'/>

                                <label htmlFor='city'>
                                    <FontAwesomeIcon icon={'city'}/>
                                    <span className='ph2'>City</span>
                                </label>
                                <input type='text' id='city' name='city' placeholder='New York'/>

                                <div className='row'>
                                    <div className='col-50'>
                                        <label htmlFor='state'>State</label>
                                        <input type='text' id='state' name='state' placeholder='NY'/>
                                    </div>
                                    <div className='col-50'>
                                        <label htmlFor='zip'>Zip</label>
                                        <input type='text' id='zip' name='zip' placeholder='10001'/>
                                    </div>
                                </div>
                            </div>

                            <div className='col-50 container br4 ma5 mt2 mr4 mb0 '>
                                <h3>Payment</h3>
                                <label htmlFor='cname'>Name on Card</label>
                                <input type='text' id='cname' name='cardname' placeholder='John More Doe'/>

                                <label htmlFor='ccnum'>Credit card number</label>
                                <input type='text' id='ccnum' name='cardnumber' placeholder='1111-2222-3333-4444'/>

                                <label htmlFor='expmonth'>Exp Month</label>
                                <input type='text' id='expmonth' name='expmonth' placeholder='September'/>

                                <div className='row'>
                                    <div className='col-50'>
                                        <label htmlFor='expyear'>Exp Year</label>
                                        <input type='text' id='expyear' name='expyear' placeholder='2018'/>
                                    </div>
                                    <div className='col-50'>
                                        <label htmlFor='cvv'>CVV</label>
                                        <input type='text' id='cvv' name='cvv' placeholder='352'/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='tc ma3'>
                            <input type='submit' value='Pay' className='btn w-30 grow'
                                   onClick={() => history.push('/')}/>
                        </div>
                    </form>
                </div>

                <div className='col-25 mt5'>
                    <div className='container br4 sticky'>
                        <h4>
                            Cart
                            <span className='price'>
                       <FontAwesomeIcon icon={'shopping-bag'}/>
                            <b className='pl2'>{renderItem.length}</b>
                        </span>
                        </h4>
                        {renderItem}
                        <hr/>
                        <p>
                            Total
                            <span className='price'>
                        <b>{total}</b>
                    </span></p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Checkout