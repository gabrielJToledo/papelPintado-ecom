import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Buffer } from 'buffer';
import './CurrentProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactStars from 'react-stars';

function CurrentProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_GET_PRODUCT_BY_ID}${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const cartProducts = localStorage.getItem('cartProducts');
    let cartProductsArray = [];

    if (cartProducts) {
      cartProductsArray = JSON.parse(cartProducts);
    }

    // Verifica se o produto já está no carrinho
    const existingProduct = cartProductsArray.find((product) => product.id === id);

    if (existingProduct) {
      // Produto já existe no carrinho, atualiza a quantidade
      existingProduct.quantity++;
    } else {
      // Produto não existe no carrinho, adiciona ao array
      cartProductsArray.push({ id, quantity: 1 });
    }

    localStorage.setItem('cartProducts', JSON.stringify(cartProductsArray));

    // Você pode adicionar mais lógica aqui, como exibir uma mensagem de sucesso
    console.log(localStorage.getItem('cartProducts'));
  };

  if (!product) {
    return <div>Carregando...</div>;
  }

  const images = [];

  if (product) {
    const imageBuffer = product.coverImage.data; // Substitua "product.image.data" pelo caminho correto do buffer da imagem
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    const imageUrl = `data:image/jpeg;base64,${base64Image}`;
    images.push(imageUrl);

    product.images.map((image) => {
      const imageBuff = image.data;
      const base64Img = Buffer.from(imageBuff).toString('base64');
      const imgUrl = `data:image/jpeg;base64,${base64Img}`;
      return images.push(imgUrl);
    });
  }

  return (
    <div className="currentProduct">
      <div className="currentProduct_container featuredProducts wrapper">
        <div className="currentProduct_info_container">
          <div className="currentProduct_images">
            <div className="small-images-container">
              {images.map((item, i) => (
                <img
                  key={i}
                  src={item}
                  alt='Images'
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
            <div className="image-container">
              <img src={images[index]} alt='Images' className="currentProduct-image" />
            </div>
          </div>
          <div className="currentProduct_infos">
            <div className="currentProduct_title_like">
              <h2 className='m-0'>{product.name}</h2>
              <FontAwesomeIcon icon="heart" className='mx-2 fa-lg' />
            </div>
            <div className="currentProduct_stars">
              <ReactStars
                count={5} // Número total de estrelas
                value={4} // Substitua "product.rating" pela propriedade correta que representa a classificação do produto
                size={24} // Tamanho dos ícones de estrela
                half={true} // Habilita ou desabilita a classificação de meia estrela
                color1="#c1c1c1" // Cor das estrelas vazias
                color2="#ffd700" // Cor das estrelas preenchidas
                edit={false} // Define a classificação como somente leitura
              />
            </div>
            <div className="currentProduct_price">
              <h2 className='m-0'>R$ {product.price}</h2>
              <p><FontAwesomeIcon icon="credit-card" className='fa-lg' /> 3x de R$32,30 sem juros</p>
            </div>
            <div className="currentProduct_buy_button">
              <div className="currentProduct_adct_prod">
                <FontAwesomeIcon icon="minus" className='fa-lg icon_adct' />
                1
                <FontAwesomeIcon icon="plus" className='fa-lg icon_adct' />
              </div>
              <div className="currentProduct_buy_prod">
                <button className="buy_button">Comprar</button>
              </div>
            </div>
            <button onClick={handleAddToCart} className="buy_button buy_button-cart">Adicionar ao Carrinho</button>
          </div>
        </div>
        <div className="division-soft"></div>
        <div className="currentProduct_desc_container">
          <h2>Descrição</h2>
          <div className="currentProduct_description" dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
        <div className="division-soft"></div>
        <div className="currentProduct_comments wrapper">
          <h2>Comentários</h2>
        </div>
      </div>
    </div>
  );
}

export default CurrentProduct;
