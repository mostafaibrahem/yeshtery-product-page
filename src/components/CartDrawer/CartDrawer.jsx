import React from 'react'
import { Button, Drawer } from 'antd'

export default class CartDrawer extends React.Component {
    render() {
        const { toggleCartDrawer, cartDrawerVisible, cart,removeFromCart } = this.props
        return (
            <Drawer
                title="My Cart"
                placement="right"
                width='400px'
                closable={true}
                onClose={toggleCartDrawer}
                visible={cartDrawerVisible}
                className='cart__drawer--wrapper'
            >
                {cart.length === 0 ?
                    <div className='empty-cart'>
                        your cart is currently empty
                    </div> :
                    <div className='cart__items--wrapper'>
                        <p className='boldest summary'>Cart Summary</p>
                        {cart.map((item) => {
                            return (
                                <div key={item.id} className='cart-item'>
                                    <div className='image-wrapper'>
                                        <img src={item.media[0].image} />
                                        <div className='cart-item-details'>
                                            <span className='boldest'>{item.name}</span>
                                            <p className='color-medium-gray'> Quantity {item.count}</p>
                                            <div className='space-between price-wrapper'>
                                                <span className='color-secondary boldest'>{item.price * (100 - item.discount) / 100}</span>
                                                <Button onClick={()=>removeFromCart(item)} className='fill-primary boldest'>Remove</Button>
                                            </div>
                                        </div>
                                    </div>


                                    <span className='justify-center boldest total'> Total : {item.count * item.price * (100 - item.discount) / 100} LE</span>
                                    <div className='space-between actions-wrapper'>
                                        <Button className='fill-primary boldest'>Review Cart</Button>
                                        <Button className='fill-secondary boldest'>Complete Checkout</Button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </Drawer>
        )
    }
}