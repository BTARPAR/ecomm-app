import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/cart.scss'
import {useSelector} from "react-redux";
import EmptyCart from "./EmptyCart";


const Cart = () => {
    const history = useHistory()
    const {cart} = useSelector((state) => state.preference)
    let totalPrice = 0
    let totalCount = 0

    const [discount, setDiscount] = useState(0)

    if (!Object.keys(cart).length) return <EmptyCart/>

    const findDiscount = (e) => {
        if (!!e.target.value) {
            switch (e.target.value.length) {
                case 4:
                    setDiscount(20)
                    break
                case 6:
                    setDiscount(30)
                    break
                case 10:
                    setDiscount(40)
                    break
                case 13:
                    setDiscount(50)
                    break
                default:
                    setDiscount(10)
                    break
            }
        } else {
            setDiscount(0)
        }
    }

    const renderCartProducts = Object.keys(cart).map((product, index) => {
        const {price, count, product_name} = cart[product]
        totalPrice += price * count
        totalCount += count
        return (
            <div className='main align-items-center flex justify-between' key={product}>
                <img className='img-fluid' src='https://i.imgur.com/1GrakTl.jpg' alt={product_name}/>
                <div className='flex flex-column justify-around'>
                    {!index && <div className='gray'>Shirt</div>}
                    <div>Cotton T-shirt</div>
                </div>
                <div className='flex flex-column justify-around'>
                    {!index && <span className='gray'>quantity</span>}
                    <div>
                        <span>-</span>
                        <span className='border'>{count}</span>
                        <span>+</span>
                    </div>
                </div>
                <div className='flex flex-column justify-around'>
                    {!index && <span className='gray'>price</span>}
                    <span>${price}</span>
                </div>
            </div>
        )
    })


    return (
        <div className='cart-container'>
            <div className='card mt5'>
                <div className='flex justify-between flex-column-m'>
                    <div className='cart w-100'>
                        <div className='f3 b'>
                            <h4>
                                <b>Shopping Cart</b>
                            </h4>
                            <div className='align-self-center text-right gray'>{Object.keys(cart).length} items</div>
                        </div>

                        {renderCartProducts}

                        <div className='back-to-shop gray pointer' onClick={history.goBack}>
                            <FontAwesomeIcon icon={'arrow-left'}/>
                            <span className='pa3'>Back to shop</span>
                        </div>
                    </div>

                    <div className='summary'>
                        <div>
                            <h5><b>Summary</b></h5>
                        </div>
                        <hr/>
                        <div className='flex justify-between'>
                            <div style={{paddingLeft: 0}}>Total Items <strong>{totalCount}</strong></div>
                            <div className='text-right b'>$ {Number(totalPrice.toFixed(2))}</div>
                        </div>
                        <div>
                            <p>GIVE CODE</p>
                            <input id='code' placeholder='Type your code' onChange={findDiscount}/>
                        </div>
                        <div className='flex justify-between' style={{
                            borderTop: '1px solid rgba(0,0,0,.1)',
                            padding: '2vh 0'
                        }}>
                            <div className='b'>TOTAL PRICE</div>
                            <div className='text-right b'>$ {totalPrice - (totalPrice * discount / 100)}</div>
                        </div>
                        <div className={'tc mt3'}>
                            <Link className='cta' to='/checkout'>
                                <span>CHECKOUT</span>
                                <svg width='13px' height='10px' viewBox='0 0 13 10'>
                                    <path d='M1,5 L11,5'></path>
                                    <polyline points='8 1 12 5 8 9'></polyline>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart