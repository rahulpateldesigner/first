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

function App() {     
  return (
    <>
    <Router>
    <Navbar />
    <Routes>      
      <Route exact path='/'  element={<Homepage/>} />
      <Route exact path='/about'  element={<About/>} />
      <Route exact path='/:categoery'  element={<Products />} />
      <Route exact path='/:categoery/:id'  element={<ProductDetails />} />
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
