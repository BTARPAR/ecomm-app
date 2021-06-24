import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom"
import {addToCart} from "../../actions";

const ProductDetailPage = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const [product, setProduct] = useState({})
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include'
        };

        fetch(`/product/?id=${params.id}`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            });
    }, [params.id])
    console.log({product})

    const addToBasket = () => {
        dispatch(addToCart(product._id))
    }
    return (
        <div className='flex'>
            <div className='ba w-100 mt4 ml3'>
                <div>About this item</div>
                <p className={'fs-normal ml3 w-80'}>{product.long_description}{product.long_description}{product.long_description}</p>

                <div>Specification</div>
                <p className={'fs-normal ml3 w-80'}>{product.specification}</p>

                <div>Seller</div>
                <p className={'fs-normal ml3 w-80 ttc'}>{product.seller_name}</p>

                <div>Brand</div>
                <p className={'fs-normal ml3 w-80 ttc'}>{product.brand}</p>

                {product.returnable && <div className='lh-solid'>
                    <div>Warranty</div>
                    <p className={'fs-normal ml3 w-80'}>90 days free return</p>
                    <p className={'fs-normal ml3 w-80'}>1 year by company</p></div>}
            </div>
            <div className='ba w-70 flex-column tc'>
                <img src={product.image_url} alt={product.product_name}/>
                <div className={'tc pa3 f3 lh-copy'}>
                    <span>${Number(product.price).toFixed(2)}</span>
                    <span className='ml2 f7 gray'>shipping + handling included</span>
                </div>
                <div className='flex justify-center'>
                    <button className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue bn pointer'
                            onClick={addToBasket}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage