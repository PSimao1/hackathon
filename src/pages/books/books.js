import react from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import Book from "../../components/Book/Book";
import BookSale from "../../components/BookSale/BookSale";
import Features from "../../components/Features/Features";
import Newsletter from "../../components/Newsletter/Newsletter";
import MyFooter from "../../components/Footer/MyFooter";

function Books() {


    return (
        <div>
            <MyNavbar />
            <Book />
            <BookSale />
            <Features />
            <Newsletter />
            <MyFooter />
        </div>
    )
}

export default Books;