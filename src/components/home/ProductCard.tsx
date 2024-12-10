const ProductCard:React.FC = () => {
    return (
        <div>
            <div className="w-full max-w-lg h-auto sm:h-[286px] rounded-lg overflow-hidden flex justify-center items-center bg-white shadow-md">
            <img
                src="https://dashboard.codeparrot.ai/api/assets/Z1gSRYwTRzcMVV8p"
                alt="Lasagna"
                className="w-full h-full object-cover"
            />
            </div>
            <div className="my-2">
            <h3>Skateboard Shoe</h3>
            <p>$125</p>
            </div>
        </div>
    )
}

export default ProductCard;