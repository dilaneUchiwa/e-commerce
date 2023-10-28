import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

export default function Home(){

    return (

        <div className="bg-light">
            <Header/>
            <ProductList />
            <Footer/>
        </div>
    )
}