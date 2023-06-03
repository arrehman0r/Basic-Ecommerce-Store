import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AppNavbar from './commonComponent/Navbar/Navbar';
import HomePage from './pages/landing/HomePage';
import AllProducts from "./pages/products/AllProducts";
import BlogsPage from "./pages/blogs/BlogsPage";
import AboutPage from  "./pages/about/AboutPage"
import ContactPage from "./pages/contact/ContactPage";
import LoginPage from "./pages/auth/LoginPage";
import AddToCartPage from "./pages/addToCart/AddToCartPage";
import DetailPage from "./pages/detailPage/DetailPage";
import Footer from './commonComponent/Footer/Footer';
import RegisterForm from './pages/auth/RegisterForm';
import ForgetForm from './pages/auth/ForgetForm';

function App() {
  return (
    <React.Fragment>
    <Router>
      <AppNavbar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/products/:id' element={<DetailPage/>}/>
          <Route path='/blogs' element={<BlogsPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/cart' element={<AddToCartPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/forget'  element={<ForgetForm/>}/>
       </Routes>
      <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;
