
import React from 'react'
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from '@ant-design/icons'


export default class ProductSlider extends React.Component {
    render() {
        const { photos } = this.props
        const settings = {
            customPaging: function (i) {
                return (
                    <a>
                        <img src={photos[i].image} />
                    </a>
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <></>,
            prevArrow: <></>
        };
        return (
            <div className="product__slider--wrapper">
                <Slider {...settings}>
                    {photos.map((item) => (
                        <div key={item.id}
                        ><img width='100%' src={item.image} />
                        </div>
                    ))}

                </Slider>
            </div>
        );
    }
}
