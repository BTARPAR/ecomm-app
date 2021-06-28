import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import useLocalStorage from "local-storage";
import {API_URL, defaultAddress, defaultPayment} from "../utils/constant";
import '../styles/checkout.scss'
import {clearCart} from "../actions";

const Checkout = () => {
    const {cart} = useSelector((state) => state.preference);
    const history = useHistory()
    const dispatch = useDispatch()
    const [form, setForm] = useState({...defaultAddress, ...defaultPayment})
    const checkoutCart = Object.keys(cart)
    let total = 0
    const renderItem = checkoutCart.map((item) => {
        const {product_name, price, _id, count} = cart[item]
        const itemTotal = count * price
        total += itemTotal
        return (
            <p key={_id}>
                <span>{count}</span>
                <span className='ph2'>x</span>
                <Link to={`/product-detail/${_id}`}>{product_name}</Link>
                <span className='price'>{itemTotal}</span>
            </p>
        )
    })

    const submitOrder = (event) => {
        event.preventDefault()
        const entireOrder = {products: Object.values(cart), ...form, total}
        fetch(API_URL('/checkout'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'included',
            body: JSON.stringify(entireOrder)
        })
            .then(() => {
                useLocalStorage.clear()
                dispatch(clearCart())
                history.push('/account')
            })
    }

    const formHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <div className='checkout-container'>
            <div className='row'>
                <div className='col-75'>
                    <form onSubmit={submitOrder}>
                        <div className='row flex-column'>
                            <div className='col-50 container br4 ma5 mr4'>
                                <h3>Billing Address</h3>
                                <label htmlFor='fname'>
                                    <FontAwesomeIcon icon={'user'}/>
                                    <span className='ph2'>Full Name</span>
                                </label>
                                <input value={form.fullname} type='text' id='fname' name='fullname'
                                       placeholder='John M. Doe'
                                       onChange={formHandler} required/>

                                <label htmlFor='email'>
                                    <FontAwesomeIcon icon={'envelope'}/>
                                    <span className='ph2'>Email</span>
                                </label>
                                <input value={form.email} type='text' id='email' name='email'
                                       placeholder='john@example.com'
                                       onChange={formHandler} required/>

                                <label htmlFor='adr'>
                                    <FontAwesomeIcon icon={'address-card'}/>
                                    <span className='ph2'>Address</span>
                                </label>
                                <input value={form.street} type='text' id='adr' name='street'
                                       placeholder='542 W. 15th Street'
                                       onChange={formHandler} required/>

                                <label htmlFor='city'>
                                    <FontAwesomeIcon icon={'city'}/>
                                    <span className='ph2'>City</span>
                                </label>
                                <input value={form.city} type='text' id='city' name='city' placeholder='New York'
                                       onChange={formHandler} required/>

                                <div className='row'>
                                    <div className='col-50'>
                                        <label htmlFor='state'>State</label>
                                        <input value={form.state} type='text' id='state' name='state' placeholder='NY'
                                               onChange={formHandler} required/>
                                    </div>
                                    <div className='col-50'>
                                        <label htmlFor='zip'>Zip</label>
                                        <input value={form.zip} type='text' id='zip' name='zip' placeholder='10001'
                                               onChange={formHandler} required/>
                                    </div>
                                </div>
                            </div>

                            <div className='col-50 container br4 ma5 mt2 mr4 mb0 '>
                                <h3>Payment</h3>
                                <label htmlFor='cname'>Name on Card</label>
                                <input value={form.cc_name} type='text' id='cname' name='cc_name'
                                       placeholder='John More Doe' onChange={formHandler} required/>

                                <label htmlFor='ccnum'>Credit card number</label>
                                <input value={form.cc_no} type='text' id='ccnum' name='cc_no'
                                       placeholder='1111222233334444' onChange={formHandler} required/>

                                <label htmlFor='expmonth'>Exp Month</label>
                                <input value={form.cc_month} type='text' id='expmonth' name='cc_month'
                                       placeholder='September' onChange={formHandler} required/>

                                <div className='row'>
                                    <div className='col-50'>
                                        <label htmlFor='expyear'>Exp Year</label>
                                        <input value={form.cc_year} type='text' id='expyear' name='cc_year'
                                               placeholder='2018' onChange={formHandler} required/>
                                    </div>
                                    <div className='col-50'>
                                        <label htmlFor='cvv'>CVV</label>
                                        <input value={form.cc_cvv} type='text' id='cvv' name='cc_cvv' placeholder='352'
                                               onChange={formHandler} required/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='tc ma3'>
                            <input type='submit' value='Pay' className='btn w-30 grow'/>
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