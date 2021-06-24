import React from "react";
import {useHistory} from 'react-router-dom'
import '../styles/emptyCart.scss'
const EmptyCart = () => {
    const history = useHistory()
    return (
        <div className="empty-container mt-100">
            <div>
                <div>
                    <div className="card">
                        <div className="card-header">
                            <h2>Cart</h2>
                        </div>
                        <div className="card-body cart">
                            <div className="tc">
                                <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130"
                                     className="img-fluid mb-4 mr-3"/>
                                <h3><strong>Your Cart is Empty</strong></h3>
                                <h4>Add something to make me happy :)</h4>
                                <span className="btn btn-primary br-pill grow dib pointer" onClick={()=>history.push('/')}>Continue Shopping</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart