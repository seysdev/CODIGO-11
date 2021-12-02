import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from '../../components/Card';
import { Grid } from '../../components/Grid';

function PageProducts() {
  const [products, setProducts] = useState([
    {
      title: 'Naranja Huando',
      photo: 'https://picsum.photos/147/147',
      price: ' S/ 3.50',
      stock: 10,
      quantity: 0,
      id: 1,
    },
    {
      title: 'Platano',
      photo: 'https://picsum.photos/147/147',
      price: ' S/ 3.50',
      stock: 10,
      quantity: 0,
      id: 2,
    },
    {
      title: 'Mandarina',
      photo: 'https://picsum.photos/147/147',
      price: ' S/ 3.50',
      stock: 10,
      quantity: 0,
      id: 3,
    },
    {
      title: 'Naranja Huando',
      photo: 'https://picsum.photos/147/147',
      price: ' S/ 3.50',
      stock: 10,
      quantity: 0,
      id: 4,
    },
    {
      title: 'Platano',
      photo: 'https://picsum.photos/147/147',
      price: ' S/ 3.50',
      stock: 10,
      quantity: 0,
      id: 5,
    },
    {
      title: 'Mandarina',
      photo: 'https://picsum.photos/147/147',
      price: ' S/ 3.50',
      stock: 10,
      quantity: 0,
      id: 6,
    },
    {
      title: 'Naranja Huando',
      photo: 'https://picsum.photos/147/147',
      price: ' S/ 3.50',
      stock: 10,
      quantity: 0,
      id: 7,
    },
    {
      title: 'Platano',
      photo: 'https://picsum.photos/147/147',
      price: ' S/ 3.50',
      stock: 10,
      quantity: 0,
      id: 8,
    },
    {
      title: 'Mandarina',
      photo: 'https://picsum.photos/147/147',
      price: ' S/ 3.50',
      stock: 10,
      quantity: 0,
      id: 9,
    },
  ]);
  const dispatch = useDispatch();

  function updateStock(id, quantity) {
    const idProduct = products.findIndex((product) => {
      return product.id == id;
    });

    const copyProducts = [...products];

    copyProducts[idProduct].stock = copyProducts[idProduct].stock - 1;
    copyProducts[idProduct].quantity = quantity;
    setProducts(copyProducts);
    dispatch({
      type: 'SET_PRODUCTS_TO_BUY',
      payload: copyProducts,
    });
  }

  return (
    <div className="page-products">
      <Grid>
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            photo={product.photo}
            stock={product.stock}
            quantity={product.quantity}
            onQuantity={updateStock}
          />
        ))}
      </Grid>
    </div>
  );
}

export { PageProducts };
