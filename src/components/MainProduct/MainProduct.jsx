import React from 'react'
import mainProduct0 from '../../images/main-product-0.jpg'
import mainProduct1 from '../../images/main-product-1.png'
import mainProduct2 from '../../images/main-product-2.png'
import mainProduct3 from '../../images/main-product-3.png'
import mainProduct4 from '../../images/main-product-4.png'
import adidasLogo from '../../images/adidas-logo.svg'
import i360degree from '../../images/360degree.svg'
import redColor from '../../images/red-color.png'
import blackColor from '../../images/black-color.png'
import ProductSlider from '../ProductSlider/ProductSlider'
import { Rate, Button } from 'antd'

export default class MainProduct extends React.Component {
    state = {
        counter: 1
    }

    incrementCounter = () => {
        this.state.counter < 10 && this.setState({ counter: this.state.counter + 1 })
    }

    decrementCounter = () => {
        this.state.counter > 1 && this.setState({ counter: this.state.counter - 1 })
    }

    addItemtoCart = (item) => {
        let cartItem = { ...item, count: this.state.counter }
        this.props.addToCart(cartItem)
    }

    render() {
        const item = {
            id: 2021,
            name: 'Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            price: 9999,
            vendorLogo: adidasLogo,
            ratting: 4.9,
            discount: 30,
            pickupFrom: 'Genena Mall',
            section: 'Men',
            avalibleSizes: [{ name: 'Small' }, { name: 'Medium' }, { name: 'Large', avtive: true }, { name: 'X Large' }, { name: 'XX Large' }],
            avalibleColors: [{ id: 111, image: blackColor, active: true }, { id: 222, image: redColor }],
            media: [{ id: 200, image: mainProduct0 }, { id: 201, image: mainProduct1 }, { id: 202, image: mainProduct2 }, { id: 203, image: mainProduct3 }, { id: 204, image: mainProduct4 }]
        }
        const { counter } = this.state
        return (
            <>
            <section className='main__product--wrapper container'>
                <div className='images-side'>
                    {/* <img className='main-image' src={mainProduct0} alt={'main product'} /> */}
                    <ProductSlider photos={item.media}/> 
                    <div className='image-360deg justify-center'>
                    <img  src={i360degree} alt='360degree'/>
                    </div>
                    
                   
                </div>
                <div className='details-side'>
                    <img className='vendor-logo' src={item.vendorLogo} alt={'adidas Logo'} />
                    <p className='boldest'>{item.name}</p>
                    <p className='boldest color-light-gray'>{item.section}</p>
                    <div><Rate allowHalf disabled defaultValue={item.ratting} /> <span className='boldest'>{item.ratting} of 5</span> <span className='color-medium-gray bold'>22 Rates</span></div>
                    <div className='price-wrapper'>
                        <span className='boldest color-secondary'>{item.price * (100 - item.discount) / 100} LE</span>
                        <span className='boldest color-light-gray line-through'>{item.price} LE</span>
                        {item.discount && <span className='fill-primary boldest'>{item.discount}% Off</span>}
                    </div>
                    <p className='boldest'>Size</p>
                    <div className='sizes-avalible'>
                        {item.avalibleSizes.map((item) => (<span key={item.name} className={`color-secondary justify-center ${item.avtive && 'active'} `}>{item.name}</span>))}

                    </div>
                    <p className='boldest'>Color</p>
                    <div className='avalible-colors'>
                        {item.avalibleColors.map((colorItem) => (<img key={colorItem.id} className={colorItem.active && 'active'} src={colorItem.image} alt='black' />))}

                    </div>
                    <p className='boldest'>Quantity</p>
                    <div className='counter-wrapper '>
                        <div onClick={() => this.decrementCounter()} className='fill-primary boldest counter-btn justify-center'>-</div>
                        <div className='boldest product-count justify-center'>{counter}</div>
                        <div onClick={() => this.incrementCounter()} className='fill-primary boldest counter-btn justify-center'>+</div>
                    </div>
                    <div className='actions-wrapper'>
                        <Button onClick={() => this.addItemtoCart(item)} className='fill-secondary boldest'>Add To Cart</Button>
                        <Button className='fill-primary boldest'>Pickup From Store</Button>
                    </div>
                </div>
            </section>
           
            </>
        )
    }
}