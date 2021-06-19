import React from 'react'
import adidasLogo from '../../images/adidas-logo.svg'
import cartIcon from '../../images/cart-icon.svg'
import heart from '../../images/heart.svg'
import person from '../../images/person.svg'
import { Input, Badge } from 'antd'


export default class MainHeader extends React.Component {

    cartCount = () => {
        let { cart } = this.props
        if (cart.length === 0) return 0
        else {
           
           let totalCount=  cart.map(item => item.count).reduce((prev, next) => prev + next)
           return totalCount
        }
    }
    render() {
        const { toggleCartDrawer, cart } = this.props

        return (
            <header className='main__header--wrapper container'>
                <Input placeholder='Search' />
                <img className='adidas-logo' src={adidasLogo} alt='adidas logo' />
                <ul>
                    <li onClick={() => toggleCartDrawer()}>
                        <Badge count={this.cartCount()} showZero style={{ backgroundColor: '#FFF100', color: 'black' }} >
                            <img src={cartIcon} alt='cart icon' />
                        </Badge><span className='word-span'>Cart</span></li>
                    <li><img src={heart} alt='Wishlist' /> <span className='word-span'>Wishlist</span></li>
                    <li> <img src={person} alt='Login' /><span className='word-span'>Login</span></li>
                </ul>
            </header>
        )
    }
}