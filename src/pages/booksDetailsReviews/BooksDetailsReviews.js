import MyNavbar from "../../components/MyNavbar/MyNavbar";
import BookDetails from "../../components/bookDetails/BookDetails";
import CustomerReview from "../../components/CustomerReview/CustomerReview";
import Features from "../../components/Features/Features";
import BookSale from "../../components/BookSale/BookSale";
import Newsletter from "../../components/Newsletter/Newsletter";
import MyFooter from "../../components/Footer/MyFooter";



export default function BooksDetailsReviews() {

  return (
    <div>
      <MyNavbar />
      <br />
      <BookDetails />
      <CustomerReview />
      <Features />
      <BookSale />
      <Newsletter />
      <MyFooter />

    </div>
  )

}
