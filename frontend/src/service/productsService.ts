import { useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../store/hooks';
import { getProductsCartFromDB, getProductsFromDB } from '../store/ducks/products/actions';

export const useGetProductsFromDB = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_ALL_PRODUCTS_API}`);
        dispatch(getProductsFromDB(response.data));
      } catch (error) {
        console.error('Erro ao obter produtos do banco de dados:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const cartItemIds = localStorage.getItem('cartProducts');
  
    if (cartItemIds) {
      const idsArray = JSON.parse(cartItemIds);
    
      axios.get(`${process.env.REACT_APP_GET_PRODUCT_CART_BY_ID}`, {
        params: { ids: idsArray },
      }).then((data) => {
        dispatch(getProductsCartFromDB(data.data));
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [dispatch]);
  
};
