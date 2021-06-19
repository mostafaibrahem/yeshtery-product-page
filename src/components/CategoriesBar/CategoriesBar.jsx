import React from 'react'

export default class CategoriesBar extends React.Component {
    render() {
        return (
            <section className='categories__bar--wrapper container'>
              
                    <span>Men</span>
                    <span>Women</span>
                    <span>Unisex</span>
                    <span>Kids</span>
                    <span>Best Sellers</span>
                    <span>New Arrivals</span>
                    <span>Offers</span>
               
            </section>
        )
    }
}