import React from 'react'
import similar from '../../images/similar.png'
import similar1 from '../../images/similar1.jpeg'
import similar2 from '../../images/similar2.jpeg'
import similar3 from '../../images/similar3.jpeg'
import similar4 from '../../images/similar4.jpg'
import similar5 from '../../images/similar5.jpg'
import adidasLogo from '../../images/adidas-logo.svg'
import i360degree from '../../images/360degree.svg'
import { Rate } from 'antd'
export default class SimilarProducts extends React.Component {
    render() {
        const products = [
            { id: 1, name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', img: similar, price: 9999, vendorLogo: adidasLogo, ratting: 4.2, discount: 50, pickupFrom: 'Genena Mall' },
            { id: 2, name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', img: similar1, price: 9999, vendorLogo: adidasLogo, ratting: 4.2, from: 'Uk', to: 'Egypt', in: 10 },
            { id: 3, name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', img: similar2, price: 9999, vendorLogo: adidasLogo, ratting: 4.2, discount: 30, pickupFrom: 'Genena Mall' },
            { id: 4, name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', img: similar3, price: 9999, vendorLogo: adidasLogo, ratting: 4.2, discount: 50, from: 'Uk', to: 'Egypt', in: 2 },
            { id: 5, name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', img: similar4, price: 9999, vendorLogo: adidasLogo, ratting: 4.2, discount: 50, from: 'Uk', to: 'Egypt', in: 2 },
            { id: 6, name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', img: similar5, price: 9999, vendorLogo: adidasLogo, ratting: 4.2, discount: 50, from: 'Uk', to: 'Egypt', in: 2 },
        ]
        return (
            <section className='similar__products--wrapper container'>
                <div className='header-wrapper'>
                    <h2>Similar Products</h2>
                    <p>You may like these products also</p>
                </div>

                <div className='products-wrapper'>
                    {products.map((product) => (
                        <div key={product.id} className='product__item--wrapper'>
                            <img className='product-img' src={product.img} alt={product.name} />
                            <span className='image-360-wrapper'>
                                <img src={i360degree} alt='360 degree' />
                            </span>
                            <div className='product-details'>
                                <p className='boldest '>
                                    {product.name}
                                </p>
                                <div className='price-logo-wrapper'>
                                    <div className='price-wrapper'>
                                        {product.discount ?
                                            <>
                                                <p className='color-secondary boldest'>{product.price * (100 - product.discount) / 100} <span className='color-secondary bold'>LE</span></p>
                                                <p className='after-discount'> <span className='line-through color-light-gray'>{product.price} LE</span>  <span className='fill-primary'> {product.discount}%</span> </p>
                                            </>
                                            : <p className='color-secondary boldest'>{product.price} <span className='color-secondary bold'>LE</span> </p>}
                                    </div>
                                    <img src={product.vendorLogo} alt='vendorLogo' />
                                </div>
                                <div className='ratting-wrapper'>  <span><Rate disabled defaultValue={product.ratting} /> {product.ratting} of 5</span></div>
                                <div>
                                    {product.pickupFrom ?
                                        <div className='justify-center'>
                                            <span className='bold'>Pickup From:</span> <span className='boldest'>{product.pickupFrom}</span>
                                        </div>
                                        :
                                        <div className='space-between'>
                                            <p><span className='bold'>From:</span> <span className='boldest'>{product.from}</span></p>
                                            <p><span className='bold'>To:</span> <span className='boldest'>{product.to}</span></p>
                                            <p><span className='bold'>in </span> <span className='boldest'>{product.in} days </span></p>
                                        </div>}
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </section>
        )
    }
}
