import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Layout from './components/Layout/Layout';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {


  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/products/:itemId" element={<ItemDetailContainer />} />
            <Route path="/item/itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element="<h1>404 NOT FOUND</h1>" />
          </Route>
        </Routes>

      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
