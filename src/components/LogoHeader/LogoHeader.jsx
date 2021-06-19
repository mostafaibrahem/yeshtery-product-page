import React from 'react'
import menuToggle from '../../images/menu-toggle.svg'
import yeshteryLogo from '../../images/yeshtery-logo.svg'
import phoneLogo from '../../images/phone.svg'
import markerLogo from '../../images/marker.svg'
import trackOrders from '../../images/track-orders.svg'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'


export default class LogoHeader extends React.Component {
    render() {
        return (
            <header className='logo__header--wrapper container'>
                <img src={menuToggle} alt='menu-toggle' />
                <img src={yeshteryLogo} alt='yeshtery-Logo' />
                <span className='valentine-span'>
                    <LeftOutlined />
                    <span>Valentine’s Day Offers! Buy Two Get One Free Shop Now</span>
                    <RightOutlined />
                </span>

                <ul>
                    <li><img src={phoneLogo} alt='Contact us' /> Contact Us</li>
                    <li><img src={trackOrders} alt='Track Order' />Track Order</li>
                    <li><img src={markerLogo} alt='Find A Store' />Find A Store</li>
                </ul>
            </header>
        )
    }
}