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

    const addToBasket = () => {
        dispatch(addToCart(product._id))
    }
    return (
        <div className='flex'>
            <div className='w-100 mt4 ml4'>
                <h2>About this item</h2>
                <p className={'fs-normal ml4 w-80'}>{product.long_description}{product.long_description}{product.long_description}</p>
                <div className='slot-container flex flex-wrap'>
                    <div className='column grow pointer'>
                        <div className='card'>
                            <h3>Specification</h3>
                            <p>{product.specification}</p>
                        </div>
                    </div>

                    <div className='column grow pointer'>
                        <div className='card'>
                            <h3>Seller</h3>
                            <p>{product.seller_name}</p>
                        </div>
                    </div>

                    <div className='column grow pointer'>
                        <div className='card'>
                            <h3>Brand</h3>
                            <p>{product.brand}</p>
                        </div>
                    </div>


                    {product.returnable && <div className='column grow pointer'>
                        <div className='card'>
                            <h3>Warranty</h3>
                            <p>{product.brand}</p>
                            <p>90 days free return</p>
                            <p>1 year by company</p>
                        </div>
                    </div>}
                </div>
            </div>
            <div className='w-70 flex-column tc'>
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