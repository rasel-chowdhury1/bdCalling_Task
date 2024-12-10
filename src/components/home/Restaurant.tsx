import RestaurantCard from "./RestaurantCard";


const Restaurant: React.FC = () => {
    return (
        <div className="w-5/6 mx-auto">
            <div className="flex justify-between items-center p-5 bg-white shadow-md my-4">
            <div>
                <h1 className="text-4xl sm:text-5xl font-medium text-orange-500 leading-tight">
                Explore <span className="text-black">Top Restaurants</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-500 mt-2">
                Check your city Near by Restaurant
                </p>
            </div>
            <div>
                <a
                href="#"
                className="text-base sm:text-lg text-gray-900 hover:underline flex items-center"
                >
                See All
                <img
                    src="https://dashboard.codeparrot.ai/api/assets/Z1gMg4wTRzcMVV8m"
                    alt="chevron-right"
                    width="21"
                    height="21"
                    className="ml-2"
                />
                </a>
            </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>

        </div>
    )
}

export default Restaurant;