import BreadcrumbSection from '../../components/BreadcrumbSection/BreadcrumbSection';
import AppFooter from '../../components/AppFooter/AppFooter';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';
import MainProduct from '../../components/MainProduct/MainProduct';
import React from 'react';
import LazyLoad from 'react-lazyload';


export default class ProductPage extends React.Component {
    render() {
        return (
            <LazyLoad >
                <BreadcrumbSection />
                <MainProduct addToCart={this.props.addToCart} />
                <SimilarProducts />
                <AppFooter />
            </LazyLoad >
        );
    }
}
