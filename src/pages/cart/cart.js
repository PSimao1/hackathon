import Features from "../../components/Features/Features";
import MyNavBar from "../../components/MyNavbar/MyNavbar";
import CheckoutPage from "../../components/Paiement/CheckoutPage";
import MyFooter from "../../components/Footer/MyFooter";



function Cart() {


    return (
        <div>
            <MyNavBar />
            <CheckoutPage />
            <Features />
            <MyFooter /> 


        </div>

    )
}

export default Cart;