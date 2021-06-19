import LogoHeader from './components/LogoHeader/LogoHeader';
import MainHeader from './components/MainHeader/MainHeader';
import CategoriesBar from './components/CategoriesBar/CategoriesBar';
import ProductPage from './pages/ProductPage/ProductPage'
import 'antd/dist/antd.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './stylesheets/css/style.css'
import React from 'react'
import CartDrawer from './components/CartDrawer/CartDrawer';
import LazyLoad from 'react-lazyload';

export default class App extends React.Component {
  state = {
    cart: [],
    cartDrawerVisible: false,
  }

  componentDidMount() {
    let localCart = localStorage.getItem('cart')
    if ( localCart) {
      this.setState({ cart: JSON.parse(localCart) })
      console.log( JSON.parse(localCart))
    }
  }

  toggleCartDrawer = () => {
    this.setState({ cartDrawerVisible: !this.state.cartDrawerVisible })
  }

  addToCart = (item) => {
    console.log('add to cart', item)
    let { cart } = this.state
    const itemId = cart.findIndex((cartItem) => cartItem.id === item.id)
    itemId === -1 ? cart.push(item) : cart[itemId].count = item.count
    this.setState({ cart: cart })
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  removeFromCart = (item) => {
    console.log('removeFromCart', item)
    const { cart } = this.state
    let filteredCart = cart.filter((cartItem) => cartItem.id !== item.id)
    console.log('filtered', filteredCart)
    this.setState({ cart: filteredCart })
    localStorage.setItem('cart', JSON.stringify(filteredCart))
  }

  render() {
    const { cartDrawerVisible, cart } = this.state
    return (
      <div className="app__container--wrapper">
        <LazyLoad>
          <LogoHeader />
          <MainHeader cart={cart} toggleCartDrawer={this.toggleCartDrawer} />
          <CategoriesBar />
          <ProductPage addToCart={this.addToCart} />
          <CartDrawer cartDrawerVisible={cartDrawerVisible} toggleCartDrawer={this.toggleCartDrawer} cart={cart} removeFromCart={this.removeFromCart} />
        </LazyLoad>
      </div>
    );
  }
}
;
