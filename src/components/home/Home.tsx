import Hero from "./Hero"
import Product from "./Product";
import Restaurant from "./Restaurant";
import Services from "./Services";


const Home: React.FC = () => {
    return (
        <>
        <Hero/>
        <Services/>
        <Restaurant/>
        <Product/>
        </>
    )
}

export default Home;