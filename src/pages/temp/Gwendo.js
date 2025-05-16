import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from '../../components/Footer/MyFooter';
import '../../components/Footer/MYFooter.css';
import Reseau from '../../components/Reseaux/Reseau';
import Newletter from '../../components/Newsletter/Newsletter';
import CheckoutPage from '../../components/Paiement/CheckoutPage';
import '../../components/Paiement/checkout.css';
import LetestNews from '../../components/LetestNews/LetestNews';
import Book from '../../components/Book/Book';
import FeatureSection from '../../components/Feature/FeatureSection';



function Gwendo() {


    return (
        <div className="Gwendo">
            <Reseau/>
            <Newletter/>
            <Footer/>
            <CheckoutPage/>
            <LetestNews/>
            <Book/>
            <FeatureSection/>
              
        </div>
    )
}

export default Gwendo;