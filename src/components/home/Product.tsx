import ProductCard from "./ProductCard";

const Product: React.FC = () => {
    return (
        <div className="container w-5/6 mx-auto py-8">
            <h1 className="text-4xl sm:text-5xl font-semibold my-10 text-black leading-tight">
            Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-40">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    )
}

export default Product;