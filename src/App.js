import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/bootstrap.scss';
import './styles/global.scss';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductPage from './components/views/ProductPage/ProductPage';
import CardPage from './components/views/CardPage/CardPage';
import Blog from './components/views/Blog/Blog';
import Register from './components/views/Register/Register';
import Shop from './components/views/Shop/Shop';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/shop'} element={<Shop />} />
          <Route path={'/shop/:categoryId'} element={<Shop />} />
          <Route path={'/product/:productId'} element={<ProductPage />} />
          <Route path={'/cart'} element={<CardPage />} />
          <Route path={'/blog'} element={<Blog />} />
          <Route path={'/register'} element={<Register />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
