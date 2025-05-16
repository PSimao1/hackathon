import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from './pages/main/main';
import Cart from './pages/cart/cart';
import Books from './pages/books/books';
import BooksDetails from './pages/booksDetails/BooksDetails';
import Simao from './pages/temp/Simao';
import Sara from './pages/temp/Sara';
import Gwendo from './pages/temp/Gwendo';
import "bootstrap-icons/font/bootstrap-icons.css";
import BooksDetailsReviews from './pages/booksDetailsReviews/BooksDetailsReviews';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes> 
        <Route path="/" element={<App />} />
        <Route path="/main" element={<Main />} />
         <Route path="/books" element={<Books />} />
          <Route path="/checkout" element={<Cart />} />
           <Route path="/booksdetails" element={<BooksDetails />} />
           <Route path="/booksreviews" element={<BooksDetailsReviews />} />
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
