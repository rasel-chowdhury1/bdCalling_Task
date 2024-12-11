import ProgressBar from "./ProgressBar";


const OrderDetails: React.FC = () => {
    
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

    return (
        <div className="w-full font-poppins text-gray-900 mx-auto">
            <div>
                 {/* Order Details Header */}
                <div className="flex flex-col md:flex-row justify-between border-b-2 border-gray-200 p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2">
                    <h2 className="text-lg md:text-xl font-semibold">Order Details</h2>
                    <div className="w-1 h-1 hidden md:block rounded-full bg-[#4D4D4D]"></div>
                    <p className="text-sm">April 24, 2021</p>
                    <div className="w-1 h-1 hidden md:block rounded-full bg-[#4D4D4D]"></div>
                    <p className="text-sm">3 Products</p>
                </div>
            
                <div className="text-[#EA5326] cursor-pointer border-b border-[#EA5326] mt-2 md:mt-0">
                    Share Review
                </div>
                </div>
            
                {/* Content Section */}
                <div className="flex flex-col md:flex-row m-4 p-2 gap-4">
                {/* Billing and Shipping Address */}
                <div className="flex flex-col md:flex-row w-full md:w-2/3 rounded border">
                    {/* Billing Address */}
                    <div className="border-r w-full md:w-1/2">
                    <div className="border-b">
                        <p className="font-poppins p-4 font-medium text-[#999999] text-base leading-[100%] uppercase">
                        Billing Address
                        </p>
                    </div>
                    <div className="mx-4">
                        <h3 className="font-poppins text-lg leading-[150%] text-[#1A1A1A] py-2 mt-2">
                        Dainne Russell
                        </h3>
                        <p className="font-poppins text-sm leading-[150%] text-[#666666] mb-6">
                        Dainne Russell, 4140 Parker Rd. Allentown, New Mexico 31134
                        </p>
                        <p className="font-poppins font-medium uppercase text-[#999999] text-sm">Email</p>
                        <p className="text-[#1A1A1A] text-base mb-6">dainne.ressell@gmail.com</p>
                        <p className="font-poppins font-medium uppercase text-[#999999] text-sm">Phone</p>
                        <p className="text-[#1A1A1A] text-base">(671) 555-0110</p>
                    </div>
                    </div>
                    {/* Shipping Address */}
                    <div className="w-full md:w-1/2">
                    <div className="border-b">
                        <p className="font-poppins font-medium p-4 text-[#999999] text-base leading-[100%] uppercase">
                        Shipping Address
                        </p>
                    </div>
                    <div className="mx-4">
                        <h3 className="font-poppins text-lg leading-[150%] text-[#1A1A1A] py-2 mt-2">
                        Dainne Russell
                        </h3>
                        <p className="font-poppins text-sm leading-[150%] text-[#666666] mb-6">
                        Dainne Russell, 4140 Parker Rd. Allentown, New Mexico 31134
                        </p>
                        <p className="font-poppins font-medium uppercase text-[#999999] text-sm">Email</p>
                        <p className="text-[#1A1A1A] text-base mb-6">dainne.ressell@gmail.com</p>
                        <p className="font-poppins font-medium uppercase text-[#999999] text-sm">Phone</p>
                        <p className="text-[#1A1A1A] text-base">(671) 555-0110</p>
                    </div>
                    </div>
                </div>
            
                {/* Order and Payment */}
                <div className="flex flex-col w-full md:w-1/3 rounded border">
                    <div className="w-full">
                    <div className="border-b flex justify-between p-4">
                        <div>
                        <p className="font-poppins text-sm font-medium text-[#999999] leading-[100%]">
                            Order ID
                        </p>
                        <p className="font-poppins text-base text-[#1A1A1A] leading-[150%] py-1">
                            #4152
                        </p>
                        </div>
                        <div className="h-[34px] border-l"></div>
                        <div>
                        <p className="font-poppins text-sm font-medium text-[#999999] leading-[100%]">
                            Payment Method
                        </p>
                        <p className="font-poppins text-base text-[#1A1A1A] leading-[150%] py-1">
                        Paypal
                        </p>
                        </div>
                    </div>
                    <div className="m-4 flex flex-col gap-4">
                        <div className="flex justify-between text-base font-poppins leading-[150%] pb-2 border-b">
                        <p className="text-[#666666]">Subtotal:</p>
                        <p className="text-[#1A1A1A]">$365.00</p>
                        </div>
                        <div className="flex justify-between text-base font-poppins leading-[150%] pb-2 border-b">
                        <p className="text-[#666666]">Discount:</p>
                        <p className="text-[#1A1A1A]">20%</p>
                        </div>
                        <div className="flex justify-between text-base font-poppins leading-[150%] pb-2 border-b">
                        <p className="text-[#666666]">Shipping:</p>
                        <p className="text-[#1A1A1A]">Free</p>
                        </div>
                        <div className="flex justify-between text-xl font-poppins leading-[150%] pb-2">
                        <p className="text-[#1A1A1A]">Total:</p>
                        <p className="text-[#EB2926] font-semibold">$365.00</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            
                {/* Progress Bar */}
                <div className="my-8">
                <ProgressBar />
                </div>
            </div>

            <div>
            <div className="bg-white  p-6 w-full ">
            
  
            <div className="grid grid-cols-12 gap-4 bg-[#F2F2F2] justify-center items-center border-b pb-4 mb-4">
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
                <div className="  col-span-2 text-center">${item.price.toFixed(2)}</div>


                <div className="col-span-3 md:col-span-3  flex justify-center items-center ">
                    x{item.quantity}
                </div>

                <div className=" md:block col-span-2 text-center">${item.subtotal.toFixed(2)}</div>

                
              </div>
            ))}
  
          </div>
            </div>
            
        </div>
    )
}


export default OrderDetails;