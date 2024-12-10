import ItemCard from "./ItemCard";

const ProductItemContainer: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
            <ItemCard path="/assets/products/TShirtGroup.png" name="Long Sleeve T-Shirt" des="Delicious tacos, appetizing..." price="$45.5"/> 
            <ItemCard path="/assets/products/TShirtGroup.png" name="Long Sleeve T-Shirt" des="Delicious tacos, appetizing..." price="$45.5" /> 
            <ItemCard path="/assets/products/food.png" name="Crazy tacko" des="Delicouse tackos, appetizing..." price="$45.5" /> 
            <ItemCard path="/assets/products/treddy.png" name="Crazy Toy" des="Delicouse tackos, appetizing..." price="$45.5" /> 
            <ItemCard path="/assets/products/books.png" name="The Book" des="Delicouse tackos, appetizing..." price="$45.5" /> 
            <ItemCard path="/assets/products/treddy.png" name="Crazy Toy" des="Delicouse tackos, appetizing..." price="$45.5" /> 
            <ItemCard path="/assets/products/treddy.png" name="Crazy Toy" des="Delicouse tackos, appetizing..." price="$45.5" /> 
            <ItemCard path="/assets/products/books.png" name="The Book" des="Delicouse tackos, appetizing..." price="$45.5" /> 
            <ItemCard path="/assets/products/treddy.png" name="Crazy Toy" des="Delicouse tackos, appetizing..." price="$45.5" /> 
        </div>
    )
}

export default ProductItemContainer;