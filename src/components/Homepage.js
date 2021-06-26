import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from 'react-router-dom'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductTile from "./Product/Tile";
import image1 from "../assets/sale/1.png";
import image2 from "../assets/sale/2.png";
import image3 from "../assets/sale/3.png";
import '../styles/homepage.scss'

const Homepage = () => {

    const {loading, products} = useSelector((state) => state.preference);
    const history = useHistory()
    const params = useParams()
    const [homepage, setHomepage] = useState([])

    useEffect(() => {
        const URL = !!params.query ? `/search/?id=${params.search}` : '/products'
        fetch(URL, {method: 'GET'})
            .then((res) => res.json())
            .then((res) => {
                setHomepage([...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res,])
            })
    }, [params])

    const renderProducts = products.map((product) => {
        return <ProductTile product={product} key={product._id}
                            redirect={() => history.push(`/product-detail/${product._id}`)}/>
    })

    if (loading) return null

    if (!products.length) {
        return (
            <div className={'homepage-add mt4 w-100'}>
                {!!homepage.length && <>
                    <Carousel showArrows={false}
                              autoPlay={true}
                              stopOnHover infiniteLoop showIndicators={false}>
                        <div className={'w-100 h-auto'}>
                            <img src={image1} className={'h-100'} height={500} width={500} alt={'ad1'}/>
                        </div>
                        <div className={'w-100 h-auto'}>
                            <img src={image2} className={'h-100'} height={500} width={500} alt={'ad2'}/>
                        </div>
                        <div className={'w-100 h-auto'}>
                            <img src={image3} className={'h-100'} height={500} width={500} alt={'ad3'}/>
                        </div>
                    </Carousel>
                    <div className={'flex flex-wrap ma5 justify-around'}>
                        {homepage.map((product) => {
                            return (
                                <ProductTile product={product} key={product._id}
                                             redirect={() => history.push(`/product-detail/${product._id}`)}
                                />
                            )
                        })}
                    </div>
                </>}
                {!homepage.length && !loading && <>
                    <div className={'flex flex-wrap ma5 justify-around take-height'}>
                        Not able to find anything. Please search something else.
                    </div>
                </>}
            </div>
        )
    }

    return (
        <div className={'flex flex-wrap w-100 flex-grow-0 flex-shrink-0 ph2 pr0-xl pl4-xl mt3 mt4 justify-center'}>
            {renderProducts}
        </div>
    )
}

export default Homepage