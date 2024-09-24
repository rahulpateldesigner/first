import './App.css';
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Homepage from './components/homepage/Homepage';
import Products from './components/products/Products';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProductDetails from './components/products/ProductDetails';
import CartCanvas from './components/common/CartCanvas';
import { useState } from 'react';
import { CartitemContext, ThemeContext } from './global/Contexts';

function App() {     
  const [theme, setTheme] = useState('dark');
  const [cartItems, setCartItems] = useState({});

  return (
    <>
    <Router>
    <ThemeContext.Provider value={{theme, setTheme}}>
    <CartitemContext.Provider value={{cartItems, setCartItems}}>
    <Navbar />
    <CartCanvas />
    <Routes>      
      <Route exact path='/'  element={<Homepage/>} />
      <Route exact path='/about'  element={<About/>} />
      <Route exact path='/:categoery'  element={<Products />} />
      <Route exact path='/:categoery/:id'  element={<ProductDetails />} />
    </Routes>
    <Footer />
    </CartitemContext.Provider>
    </ThemeContext.Provider>
    </Router>
    </>
  );
}

export default App;
