import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Success from "./pages/Success";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  const user=useSelector((state)=>state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/login" element={user?<Home/>:<Login/>}/>
        <Route path="/register" element={user?<Home/>:<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
