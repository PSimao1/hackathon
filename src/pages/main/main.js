import MyNavbar from "../../components/MyNavbar/MyNavbar";
import TopPromo from "../../components/TopPromo/TopPromo";
import Features from "../../components/Features/Features";
import ChoiceBook from "../../components/ChoiceBook/ChoiceBook";
import { Container } from "react-bootstrap";
import CarouselSpecial from "../../components/carouselSpecial/carouselSpecial";
import FlashSale from "../../components/FlashSale/FlashSale";
import Testimonials from "../../components/Testimonials/Testimonials";
import LetestNews from "../../components/LetestNews/LetestNews";
import Reseau from "../../components/Reseaux/Reseau";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/MyFooter";
import BookSale from "../../components/BookSale/BookSale";
import FeaturedBooks from "../../components/FeaturedBooks/FeaturedBooks";
import "./main.css";


function Main() {


    return (
        <Container fluid >
        <MyNavbar />
        <TopPromo />
        <Features />
        <ChoiceBook />
        <CarouselSpecial />
        <FlashSale/>
        <BookSale />
        <FeaturedBooks />
        <Testimonials />
        <LetestNews />
        <Reseau />
        <Newsletter />
        <Footer />
        </Container>
    )
}

export default Main;