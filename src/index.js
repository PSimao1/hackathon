import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from './pages/main/main';
import Cart from './pages/cart/cart';
import Books from './pages/books/books';
import BookDetails from './pages/bookDetails/BookDetails';
import Simao from './pages/temp/Simao';
import Sara from './pages/temp/Sara';
import Gwendo from './pages/temp/Gwendo';
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes> 
        <Route path="/" element={<App />} />
        <Route path="/main" element={<Main />} />
         <Route path="/books" element={<Books />} />
          <Route path="/cart" element={<Cart />} />
           <Route path="/bookdetails" element={<BookDetails />} />
           <Route path="/simao" element={<Simao />} />
           <Route path="/sara" element={<Sara />} />
           <Route path="/gwendo" element={<Gwendo />} />

      </Routes>
    </Router>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
