import Banner from "@/components/auth/Banner";
import Sidebar from "@/components/shared/Sidebar";

export default function CartPage(){
    return (
        <div>
          <Banner path="/assets/signInBanner.png"/>
          <div className="w-5/6 mx-auto">
              <div className="flex w-full my-4">
                  <div className=" w-1/5"><Sidebar/></div>
                  <div className="w-4/5 mx-4 border rounded-md ">
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
            
            </div>
                   </div>
              </div>
          </div>
      </div>
    )
}