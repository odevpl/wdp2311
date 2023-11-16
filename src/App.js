import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/bootstrap.scss';
import './styles/global.scss';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import CardPage from './components/views/CardPage/CardPage';
import Blog from './components/views/Blog/Blog';
import Search from './components/common/Search/Search';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop/:categoryId' component={ProductList} />
          <Route exact path='/product/:productId' component={ProductPage} />
          <Route exact path='/cart' component={CardPage} />
          <Route exact path={'/blog'} component={Blog} />
          <Route exact path={'/search/:category'} component={Search} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
