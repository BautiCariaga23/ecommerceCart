import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element = {<Home/>}></Route>
        <Route exact path='/cart' element = {<Cart/>}></Route>
        <Route exact path='/product-detail' element = {<ProductDetail/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
