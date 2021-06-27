import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux";
import '../styles/header.scss'
import {loading, setProductsData, sidebarHandler} from "../actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {API_URL} from "../utils/constant";

const Header = () => {
    const {loading: loadingStatus, cart, sidebar} = useSelector((state) => state.preference);
    const dispatch = useDispatch()
    const [searchProducts, setSearchProducts] = useState('')
    const history = useHistory()
    const counter = Object.keys(cart).length ? Object.values(cart).reduce((acc, curr) => {
        acc += curr.count
        return acc
    }, 0) : 0

    const logOut = async () => {
        dispatch(loading())

        const requestOptions = {
            method: 'POST',
            credentials: 'include'
        };

        await fetch(API_URL('/logOut'), requestOptions);
        const timer = setTimeout(() => {
            dispatch(loading())
            history.push('/login')
            clearTimeout(timer)
        }, 3000)
    }

    const search = async (e) => {
        e.preventDefault()
        dispatch(loading())

        const requestOptions = {
            method: 'GET'
        };

        const response = await fetch(API_URL('/products'), requestOptions);
        const data = await response.json()
        dispatch(setProductsData(data))
        dispatch(loading())
        if (history.location.pathname !== '/') {
            history.push('/')
        }
    }

    return (
        <header id="header" className="courier f3 lh-title pv4">
            <div className={'flex items-center'}>
                {!sidebar &&
                <FontAwesomeIcon icon={'bars'} onClick={() => dispatch(sidebarHandler())} color={'#FFFFFF'}/>}
                {/*<img src={logo} width="100" onClick={() => {*/}
                {/*    history.push('/')*/}
                {/*    dispatch(setProductsData([]))*/}
                {/*}} alt={'ecomm-logo'} className="pointer"/>*/}
            </div>
            <div className="dn-s">
                <form onSubmit={search}>
                    <input type={'text'} className={'br4 ba b--light-blue'}
                           onChange={(e) => setSearchProducts(e.target.value)}
                           value={searchProducts} disabled={loadingStatus}
                           placeholder={'Search everything'}/>
                </form>
            </div>
            <div className="dn-s">
                <span className={'relative pointer'} onClick={() => history.push('/cart')}>
                    <span>
                        <FontAwesomeIcon icon={'shopping-bag'} color={'#ffffff'}/>
                    </span>
                    {!!counter && <span className={'relative cart-counter'}>
                            <FontAwesomeIcon icon={'circle'} color={'#F0E632'} className={'absolute top-0'}/>
                            <p className={`f7 absolute top-0 left-0 translate b  ${counter < 10 && 'translate-single'}`}>{counter}</p>
                        </span>}
                </span>
            </div>
        </header>
    )
}

export default Header