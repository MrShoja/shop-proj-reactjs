import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

// Components ⍗
import Store from './Components/Store';
import ProductDetails from './Components/ProductDetails';

//Context ⍗
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './shared/Navbar';
import Cart from "./shared/Cart"

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/Cart" component={Cart} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
