
interface ProductData {
      path: string; }

const ProductCard:React.FC<ProductData> = ({path}) => {
    return (
        <div>
            <div className="w-full max-w-lg h-auto sm:h-[286px] rounded-lg overflow-hidden flex justify-center items-center bg-white shadow-md">
            <img
                src={path}
                alt="Lasagna"
                className="w-full h-full object-cover"
            />
            </div>
            <div className="my-2">
            <h3 className="font-figtree text-xl font-medium text-[#232323]">Skateboard Shoe</h3>
            <p className="font-inter text-base text-[#232323]">$125</p>
            </div>
        </div>
    )
}

export default ProductCard;