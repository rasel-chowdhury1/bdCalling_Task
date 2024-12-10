import OrderHistory from "./OrderHistory";

const Dashboards: React.FC = () => {
    return (
        <div>
            {/** prrofile and address */}
            <div className="flex flex-col md:flex-row w-full mx-2 gap-2">
                {/** prifile */}
                <div className=" w-full md:w-3/5 h-[316px] border-2 flex flex-col items-center justify-center rounded-md">
                    <div className="w-[138px] h-[137px] mb-5">
                        <img
                        src="/assets/dashboard/Profile.png"
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-[3px] mb-5">
                        <h2 className="font-poppins text-[23px] font-medium text-[#1A1A1A] leading-[150%] m-0">
                        Dianne Russell
                        </h2>
                        <p className="font-poppins text-[16px] font-normal text-[#808080] leading-[150%] m-0">
                        Customer
                        </p>
                    </div>
                    <button
                        className="font-poppins text-[18px] font-medium text-[#EA5326] bg-none border-none cursor-pointer  px-4 leading-[150%] hover:opacity-80"
                    >
                        Edit Profile
                    </button>
                </div>
                {/** address */}
                <div className="w-full md:w-2/5 h-[316px] border-2 p-8">
                   <h3 className="text-base my-2 font-poppins font-medium uppercase leading-[100%] text-[#999999] ">Billing Address</h3>
                   <h2 className="text-lg font-poppins font-medium my-4 leading-[150%] text-[#1A1A1A] ">Dainne Russell</h2>
                   <p className="text-base font-poppins  my-4 leading-[150%] text-[#666666] ">4140 Parker Rd. Allentown, New Mexico 31134</p>
                   <p className="text-lg font-poppins leading-[150%] text-[#1A1A1A] ">dainne.ressell@gmail.com</p>
                   <p className="text-lg font-poppins  leading-[150%] text-[#1A1A1A] ">(671) 555-0110</p>
                   <button
                        className="font-poppins my-4 text-[18px] font-medium text-[#EA5326] bg-none border-none cursor-pointer  leading-[150%] hover:opacity-80"
                    >
                        Edit Address
                    </button>
                </div>
            </div>

            <div className="m-2 border rounded p-4">
              <OrderHistory/>
            </div>
        </div>
    )
}


export default Dashboards;