import React from 'react'
import yeshteryYellow from '../../images/yeshtery-yellow.svg'
import facebookIcon from '../../images/facebook-icon.svg'
import linkedinIcon from '../../images/linkedin-icon.svg'
import instgramIcon from '../../images/instgram-icon.svg'
import twitterIcon from '../../images/twitter-icon.svg'
import cashOnDelivery from '../../images/cash-on-delivery.png'
import visa from '../../images/visa.png'
import mastercard from '../../images/mastercard.png'
import nasnavLogo from '../../images/nasnav-logo.svg'


import subscribe from '../../images/subscribe.svg'
import { Input, Button } from 'antd'
export default class AppFooter extends React.Component {
    render() {
        const suffix = (
            <Button
                style={{
                    fontSize: 16,
                    color: '#1890ff',
                }}
            >
                Subscribe <img src={subscribe} alt='subscribe' />
            </Button>
        );
        return (
            <footer className='app__footer--wrapper container'>
                <div className='top-part'>
                    <div className='logo_side'>
                        <img src={yeshteryYellow} alt={'Yeshtery logo Yellow'} />
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia </p>
                        <p>m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit</p>

                    </div>
                    <div className='subscribe_side'>
                        <p>Subscribe to our newsletter</p>
                        <Input
                            placeholder="Enter Your Mail"
                            suffix={suffix}
                        />
                        <div className='site-map'>
                            <div className='links'>
                                <ul>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>Track Order</li>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                    <li>Sell With Us</li>
                                    <li>Shipping And Returns</li>
                                </ul>

                            </div>
                            <div className='social-media'>
                                <ul>
                                    <li><img src={facebookIcon} alt='facbook icon' />/YESHTERY</li>
                                    <li><img src={linkedinIcon} alt='linkedin icon' />/YESHTERY</li>
                                    <li><img src={instgramIcon} alt='instgram icon' />/YESHTERY</li>
                                    <li><img src={twitterIcon} alt='twitter icon' />/YESHTERY</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='bottom-part'>
                    <p>© 2021 yeshtery, all rights reserved.</p>
                    <div className='payment-methods-powered-by'>
                        <span>
                            <img src={cashOnDelivery} alt='cash On Delivery' />
                            <img src={visa} alt='visa' />
                            <img src={mastercard} alt='mastercard' />
                        </span>
                        <span>Powered By <img src={nasnavLogo} alt={'nasnavLogo'} /></span>
                    </div>
                </div>
                <div className='justify-center'>
                    <a href='https://github.com/mostafaibrahem'>Developed By: Mostafa Ibrahim</a>
                </div>



            </footer>
        )
    }
}

/*   */