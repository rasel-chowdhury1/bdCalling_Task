import RestaurantCard from "@/components/home/RestaurantCard"
import SearchField from "@/components/shared/SearchField"

export default function Restaurant() {
    return (
        <div className="w-5/6 mx-auto">
          <div className="flex justify-between items-center p-5 bg-white my-4">
            <div className="w-4/6">
                <h1 className="text-4xl sm:text-5xl font-medium text-black mb-10 ">
                Explore <span className="text-orange-500 ">Restaurants</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-500 mt-2 ">
                Check your city Near by <br/>Restaurant
                </p>
            </div>

            <div className="w-4/6 flex  justify-end items-start">
              <SearchField  color="bg-orange-500"/>
            </div>
          </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>

        </div>
    )
}