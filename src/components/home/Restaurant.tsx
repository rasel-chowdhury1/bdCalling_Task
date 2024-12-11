import { RestaurantData } from "@/lib/RestaurantData";
import RestaurantCard from "./RestaurantCard";




const Restaurant: React.FC = () => {
    return (
        <div className="w-5/6 mx-auto">
            <div className="flex justify-between items-center mt-10 bg-white">
                <div className="">
                    <h1 className="font-roboto text-4xl sm:text-5xl font-medium text-orange-500">
                    Explore <span className="text-black">Top Restaurants</span>
                    </h1>
                    <p className="font-kumbh-sans text-base sm:text-xl text-gray-500 mt-2">
                    Check your city Near by <br/> Restaurant
                    </p>
                </div>
                <div>
                    <a
                    href="#"
                    className="font-kumbh-sans text-sm sm:text-lg text-[#232323] hover:underline flex items-center"
                    >
                    See All
                    <img
                        src="/assets/leftArrow.png"
                        alt="chevron-right"
                        width="8"
                        height="8"
                        className="ml-2"
                    />
                    </a>
                </div>

            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
                {RestaurantData.slice(0, 3).map((res,idx) => (
                    <RestaurantCard key={idx} data={res} />
                ))}
            </div>

        </div>
    )
}

export default Restaurant;