
import './App.css';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ProductDetails from './components/product/productDetails';
import ProductSearch from './components/product/ProductSearch';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { useEffect, useState } from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
import axios from 'axios';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ResetPassword';
import Cart from './components/cart/Cart';

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("")
  useEffect(() => {
    store.dispatch(loadUser)
  },[])

  return (
    <Router>
    <div className="App">
    <HelmetProvider>
      <Header/>
      <div class="container container-fluid">
      <ToastContainer theme='dark' />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/search/:keyword' element={<ProductSearch/>} />
      <Route path='/product/:id' element={<ProductDetails/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/myprofile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
      <Route path='/myprofile/update' element={<ProtectedRoute><UpdateProfile/></ProtectedRoute>} />
      <Route path='/myprofile/update/password' element={<ProtectedRoute><UpdatePassword/></ProtectedRoute>} />
      <Route path='/password/forgot' element={<ForgotPassword/>} />
      <Route path='/password/reset/:token' element={<ResetPassword/>} />
      <Route path='/cart' element={<Cart/>} />
      </Routes>
      </div>
      <Footer/>
     </HelmetProvider>
    </div>
    </Router>
  );
}

export default App;
