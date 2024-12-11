import ProductCard from "./ProductCard";

const Product: React.FC = () => {
    return (
        <div className="container w-5/6 mx-auto py-8">
            <h1 className="text-5xl sm:text-4xl font-semibold md:font-bold font-figtree my-10 ">
            Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-40">
          <ProductCard path="/assets/products/burger.png"/>
          <ProductCard path="/assets/products/prod2.png"/>
          <ProductCard path="/assets/products/pasta.png"/>
          <ProductCard  path="/assets/products/prod4.png"/>
          <ProductCard  path="/assets/products/prod2.png"/>
          <ProductCard  path="/assets/products/chips.png"/>
          <ProductCard  path="/assets/products/burger.png"/>
          <ProductCard  path="/assets/products/prod2.png"/>
          <ProductCard  path="/assets/products/pasta.png"/>
        </div>
      </div>
    )
}

export default Product;