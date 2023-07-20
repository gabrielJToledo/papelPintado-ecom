import React, { useState, useEffect, useMemo } from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAppSelector } from '../../store/hooks'
import { Buffer } from 'buffer';
import { useReloadCartFromDB } from '../../helpers/reloadCartProducts';

import PaymentModal from './PaymentModal';

function Cart() {
  const cartProducts = useAppSelector((state) => state.products.cart)

  const [showModal, setShowModal] = useState(false);

  const reloadCartFromDB = useReloadCartFromDB()

  const localStorageCartProducts = useMemo(() => JSON.parse(localStorage.getItem('cartProducts')) || [], []);

  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    // Atualizar as quantidades iniciais dos produtos no estado local
    const quantities = {};
    localStorageCartProducts.forEach((item) => {
      quantities[item.id] = item.quantity;
    });
    setProductQuantities(quantities);
  }, [localStorageCartProducts]);

  const getProductQuantity = (productId) => {
    return productQuantities[productId] || 0;
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedQuantities = {
      ...productQuantities,
      [productId]: Math.max((productQuantities[productId] || 0) - 1, 0)
    };

    setProductQuantities(updatedQuantities);

    const updatedCartProducts = localStorageCartProducts.reduce((acc, item) => {
      if (item.id === productId) {
        if (updatedQuantities[productId] === 0) {
          // Se a quantidade for 0, não adicionamos o item de volta ao array
          return acc;
        }
        return [...acc, { ...item, quantity: updatedQuantities[productId] }];
      }
      return [...acc, item];
    }, []);

    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));

    console.log(localStorageCartProducts)

    reloadCartFromDB()
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedQuantities = {
      ...productQuantities,
      [productId]: (productQuantities[productId] || 0) + 1
    };
    setProductQuantities(updatedQuantities);

    const updatedCartProducts = localStorageCartProducts.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: updatedQuantities[productId] || 0
        };
      }
      return item;
    });
    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
  };

  return (
    <div className="cart">
      <div className="wrapper featuredProducts">
        <div className="title_product_container">
          <FontAwesomeIcon icon="store" className='icon_product_card fa-xl mx-2' /> <h2 className='m-0'>Carrinho de <span className="text-primary">Compras</span></h2>
        </div>

        <div className="division cart-division"></div>

        <div className="cart_products">
          {cartProducts && cartProducts.length > 0 ? (
            cartProducts.map((product) => {
              const imageBuffer = product.coverImage.data;
              const base64Image = Buffer.from(imageBuffer).toString('base64');
              const imageUrl = `data:image/jpeg;base64,${base64Image}`;

              const quantity = getProductQuantity(product._id);

              return (
                <div className="cart_product_container" key={product._id}>
                  <div className="cart_product_img-container">
                    <img className='cart_product_img' src={imageUrl} title={product.name} alt={product.name} />
                  </div>

                  <div className="cart_title">
                    <h2 className='m-0'>{product.name}</h2>
                  </div>

                  <div className="cart_amount">
                    <div className="currentProduct_adct_prod">
                      <FontAwesomeIcon
                        icon="minus"
                        className='fa-lg icon_adct'
                        onClick={() => handleDecreaseQuantity(product._id)}
                      />
                      {quantity}
                      <FontAwesomeIcon
                        icon="plus"
                        className='fa-lg icon_adct'
                        onClick={() => handleIncreaseQuantity(product._id)}
                      />
                    </div>
                  </div>

                  <div className="cart_price">
                    <p className='m-0 text-center'>R$ {product.price}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Nenhum produto encontrado no carrinho.</p>
          )}

          <PaymentModal />

        </div>
      </div>

    </div>
  );
}

export default Cart;
