import MyNavbar from "../../components/MyNavbar/MyNavbar";
import BookDetails from "../../components/bookDetails/BookDetails";
import DetailsProduct from "../../components/DetailsProduct/DetailsProduct";
import Features from "../../components/Features/Features";
import BookSale from "../../components/BookSale/BookSale";
import Newsletter from "../../components/Newsletter/Newsletter";
import MyFooter from "../../components/Footer/MyFooter";


export default function BooksDetails() {

  return (
    <div>
    <MyNavbar />
    <br />
    <BookDetails />
    <DetailsProduct/>
    <Features/>
    <BookSale />
    <Newsletter />
    <MyFooter />
  

  </div>
  )

}
