import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useDispatch} from "react-redux";
import StarRatings from 'react-star-ratings'
import {addToCart} from "../../actions";

const ProductTile = ({
  product: {
      _id: id = '',
      product_name: name = '',
      image_url: img = '',
      review = 0,
  },
  product,
  redirect = () => {}
}) => {
    const dispatch = useDispatch()

    return (
        <div className='mb3 pb3 ph1 pa0-xl bb b--gray w25'>
            <div className="sans-serif mid-gray relative flex flex-column w5 pointer ">
                <span className="absolute w-100 h-100 z-1" onClick={redirect}></span>
                <div className="h2 relative mv2"></div>
                <div className="relative overflow-hidden"
                     style={{
                         maxWidth: '226px',
                         height: '0',
                         paddingBottom: 'min(200px, 100%)',
                         alignSelf: 'center',
                         width: 'min(200px, 100%)'
                     }}>
                    <img src={img} className="absolute top-0 left-0" data-testid="productTileImage" alt=""/>
                </div>

                <div className="b f5 black mr1 mr2-xl lh-copy f4-l" aria-hidden="true">$994.97</div>
                <span className="f6 f5-l normal dark-gray mb0 mt1 lh-title">{name}</span>
                <div className="mt2 flex items-center">
                <span className='w4'>
                    <StarRatings
                        rating={review}
                        starDimension="15px"
                        starSpacing="1px"
                    /> 8
                </span>
                </div>
                <div className="absolute right-0 right-1-l right-2-xl z-2">
                    <button type="button" onClick={() => dispatch(addToCart(product))}
                            className="pointer bn bg-blue hover-bg-dark-blue white h2 w2 flex items-center justify-center br4 shadow-1">
                        <FontAwesomeIcon icon={'plus'}/>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ProductTile