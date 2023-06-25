import React from 'react'
import './FeaturedProducts.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const productImg = require('../../assets/images/product.jpg')

function FeaturedProducts() {
    return (
        <div className="featuredProducts p-3 wrapper">
            <div className="title_product_container">
            <FontAwesomeIcon icon="store" className='icon_product_card fa-xl mx-2' /> <h2 className='m-0'>Papeis de Parede em <span className="text-primary">Destaque</span></h2>
            </div>

            <div className="division"></div>

            <div className="card_product_container">
                <div className="product_card col-3">
                    <Link className='link_card_product' to="/">
                        <img src={productImg} title='Produto em Destaque' alt="Produto em Destaque" />
                        <div className="description_card_product">
                            <h2 className='title_card_product '>Papel de Parede Infantil Primavera dos Pássaros AD003</h2>
                            <h2 className='price_card_product'>R$ 44,70 m2</h2>
                            <h2 className='discount_card_product'>Em até 6x sem juros 5% de desconto no PIX</h2>
                        </div>
                    </Link>
                </div>

                <div className="product_card col-3">
                    <Link className='link_card_product' to="/">
                        <img src={productImg} title='Produto em Destaque' alt="Produto em Destaque" />
                        <div className="description_card_product">
                            <h2 className='title_card_product '>Papel de Parede Infantil Primavera dos Pássaros AD003</h2>
                            <h2 className='price_card_product'>R$ 44,70 m2</h2>
                            <h2 className='discount_card_product'>Em até 6x sem juros 5% de desconto no PIX</h2>
                        </div>
                    </Link>
                </div>

                <div className="product_card col-3">
                    <Link className='link_card_product' to="/">
                        <img src={productImg} title='Produto em Destaque' alt="Produto em Destaque" />
                        <div className="description_card_product">
                            <h2 className='title_card_product '>Papel de Parede Infantil Primavera dos Pássaros AD003</h2>
                            <h2 className='price_card_product'>R$ 44,70 m2</h2>
                            <h2 className='discount_card_product'>Em até 6x sem juros 5% de desconto no PIX</h2>
                        </div>
                    </Link>
                </div>

                <div className="product_card col-3">
                    <Link className='link_card_product' to="/">
                        <img src={productImg} title='Produto em Destaque' alt="Produto em Destaque" />
                        <div className="description_card_product">
                            <h2 className='title_card_product '>Papel de Parede Infantil Primavera dos Pássaros AD003</h2>
                            <h2 className='price_card_product'>R$ 44,70 m2</h2>
                            <h2 className='discount_card_product'>Em até 6x sem juros 5% de desconto no PIX</h2>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default FeaturedProducts