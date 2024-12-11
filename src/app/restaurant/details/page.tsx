import ItemContainer from "@/components/shared/ItemContainer";
import ProductItemContainer from "@/components/shared/ProductItemContainer";


const RestaurantDetails:React.FC = () =>{

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          stars.push(
            <span key={i} className={`star ${i <= rating ? 'text-yellow-500 font-bold' : 'text-gray-300 font-bold'}`}>
              ★
            </span>
          );
        }
        return stars;
      };

    return (
        <div className="w-5/6 mx-auto">
            <div className="max-w-full md:max-w-full h-auto md:h-[940px] bg-white rounded relative overflow-hidden ">
            <div className="relative w-full md:w-full
            h-auto md:h-[580px] mx-auto mt-6 md:mt-4 border-2 border-[#00A86B] rounded-lg">
                <img src='/assets/RestaurantBanner.png' alt="Villagio Restaurant & Bar" className="w-full h-full object-cover rounded-lg" />
                <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#00A86B] p-2 rounded">
                <img src="/assets/leftArrowIcon.png" alt="Previous" width="20" height="16" />
                </button>
                <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#00A86B] p-2 rounded" >
                <img src="/assets/rightArrowIcon.png" alt="Next" width="20" height="16" />
                </button>
            </div>

            <div className="px-6 py-4">
                <div className="mb-6">
                <h1 className="text-[#334A55] text-4xl md:text-5xl font-medium">Villagio Restaurant & Bar</h1>
                <div className="h-px bg-gray-300 mt-4"></div>
                </div>
                
                <div>
                    <div className="flex flex-col md:flex-row justify-between  gap-6">
                    <div className="flex gap-4 items-start w-full md:w-auto">
                        <div className="w-9 h-9">
                        <img src="/assets/IconRes.png" alt="Location" className="w-21 h-30" />
                        </div>
                        <p className="text-[#334A55] text-xl">360 San Lorenzo Avenue, Suite <br/>1430 Coral Gables, FL 33146-1865 |</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <button className="p-0" >
                        <img src="/assets/DropDown.png" alt="Menu" width="20" height="15" />
                        </button>
                    </div>
                    </div>

                    
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <div className="flex gap-2">{renderStars(4)}</div>
                    <span className="text-[#1D242D] font-semibold text-3xl">{4.3}</span>
                </div>

                </div>

                

            </div>
            </div>

            <div className="flex justify-between items-center w-full max-w-[1519.88px] p-0">
            <div className="flex flex-col justify-center">
                <h1 className="font-urbanist font-bold text-[48.49px] leading-[1.2] text-[#1d242d] m-0">
                Items <span role="img" aria-label="fire">🔥</span>
                </h1>
            </div>
            <div className="flex items-center">
                <button
                className="flex items-center justify-center px-[33.94px] py-[14.55px] bg-[#d9f3e3] rounded-full border-none cursor-pointer font-urbanist font-normal text-xs leading-[14.4px] tracking-[0.2px] text-[#00b047] hover:opacity-90"
                
                >
                See all
                </button>
            </div>
            </div>

            <ItemContainer/>
            <ProductItemContainer />
        </div>
    )
}

export default RestaurantDetails;

