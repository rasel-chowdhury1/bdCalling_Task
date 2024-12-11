
import IconButton from "@/components/shared/IconButton";



export default function ShoppingCart(){
     const cartItems = [
        {
          id: 1,
          name: 'Freezer',
          image: '/assets/Product.png',
          price: 14.00,
          quantity: 5,
          subtotal: 70.00,
        },
        {
          id: 2,
          name: 'TV',
          image: '/assets/Product2.png',
          price: 14.00,
          quantity: 1,
          subtotal: 14.00,
        }
      ]
    
      
    
      const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.subtotal, 0);
      };

    return (
        <div className=" w-5/6 mx-auto mt-4 mb-20">
            <h2 className="text-2xl font-bold mb-6">My Shopping Cart</h2>
        <div className="w-full flex flex-col md:flex-row gap-4 ">
          {/* Shopping Cart */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-4/6">
            
  
            <div className="grid grid-cols-12 gap-4 items-center border-b pb-4 mb-4">
              <div className="col-span-6 md:col-span-4 font-bold">Product</div>
              <div className="hidden md:block col-span-2 font-bold text-center">Price</div>
              <div className="hidden md:block col-span-3 font-bold text-center">Quantity</div>
              <div className="hidden md:block col-span-2 font-bold text-center">Subtotal</div>
              <div className="hidden md:block col-span-1 font-bold text-center"></div>
            </div>
  
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-12 gap-4 items-center border-b py-4">
                <div className="col-span-4 md:col-span-4 flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <span className="hidden md:block">{item.name}</span>
                </div>
                <div className="hidden md:block col-span-2 text-center">${item.price.toFixed(2)}</div>


                <div className="col-span-3 md:col-span-3 w-2/3 mx-auto rounded-full flex justify-center items-center gap-2 border ">
                    <IconButton>-</IconButton>
                    <span className="w-6 text-center font-medium text-gray-800">{item.quantity}</span>
                    <IconButton>+</IconButton>
                </div>

                <div className=" md:block col-span-2 text-center">${item.subtotal.toFixed(2)}</div>

                <button
                  className="col-span-1 text-red-500"
                >
                  <IconButton>X</IconButton>
                </button>
              </div>
            ))}
  
            {/* Actions */}
            <div className="flex justify-between mt-6">
              <button className="bg-gray-200 px-2 md:px-4 py-2 rounded-full hover:bg-gray-300">Return to shop</button>
              <button className="bg-gray-400 text-white px-2 md:px-4 py-2 rounded-full hover:bg-gray-900">Update Cart</button>
            </div>
          </div>
  
          {/* Cart Total */}
          <div className="bg-white h-[300px]  shadow-md rounded-lg p-6 mt-6 md:w-1/3 md:ml-auto">
            <h3 className="text-xl font-bold mb-4">Cart Total</h3>
            <div className="flex justify-between mb-2 border-b py-2">
              <span>Subtotal</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 border-b py-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-4 ">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600">Proceed to checkout</button>
          </div>

        </div>
      </div>

    )
}