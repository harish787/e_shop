import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HOmePage';
import ProductsPage from './pages/ProductPage';
import MyCartPage from './pages/MyCartPage';
import AccountPage from './pages/AccountPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';
 

const App = () => {
    return (
        <AuthProvider>
        <CartProvider> 
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/mycart" element={<MyCartPage />} />
                    <Route path="/account" element={<PrivateRoute><AccountPage /></PrivateRoute>} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </Router>
        </CartProvider>
        </AuthProvider>
    );
};

export default App;
