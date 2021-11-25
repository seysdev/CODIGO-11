import React, { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Card } from './components/Card';
import { Grid } from './components/Grid';

import './app.css';

function App() {
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

  function updateStock(id, quantity) {
    console.log('id', id);
    console.log('quantity', quantity);
    products.map((product) => {});
    // products.push({
    //   title: 'fruta prueba',
    //   photo: 'https://picsum.photos/147/147',
    //   price: ' S/ 3.50',
    //   stock: 0,
    //   id: 9,
    // });
    // console.log('products', products);
    // setProducts((state) => {
    //   return [
    //     ...state,
    //     {
    //       title: 'fruta de prueba',
    //       photo: 'https://picsum.photos/147/147',
    //       price: ' S/ 3.50',
    //       stock: 0,
    //       id: 9,
    //     },
    //   ];
    // });
  }

  return (
    <div className="app">
      <Header />
      <Main>
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
      </Main>
      <Footer />
    </div>
  );
}

export { App };
