import React from 'react'
import { Breadcrumb } from 'antd'

export default class BreadcrumbSection extends React.Component {
    render() {
        return (
            <section className='breadcrumb__section--wrapper container'>

                <Breadcrumb>
                    <Breadcrumb.Item>Men</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Clothing</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Tops</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Adidas</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Adidas Black T-Shirt</Breadcrumb.Item>
                </Breadcrumb>

            </section>
        )
    }
}
