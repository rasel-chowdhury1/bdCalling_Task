import Image from "next/image";

interface ResturantData {
  data: {
    path: string; 
    name: string;
    rating: number;
    location: string;
    des: string;
  }
}

const RestaurantCard:React.FC<ResturantData> = ({data}) => {
  const {path,name,rating,location, des} = data;
  return (
    <div className="w-full max-w-md p-3 sm:max-w-[471px] h-auto rounded-2xl border border-gray-300 bg-white overflow-hidden relative shadow-md">
    {/* Image Section */}
    <div className="w-full">
      <Image
        src={path}
        alt={name}
        className=""
        // layout="fill" 
        objectFit="cover"
        width={433}
        height={308}
      />
    </div>

    {/* Content Section */}
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-start mb-3 mt-4 ">
        <h1 className="text-3xl font-roboto sm:text-2xl font-medium text-gray-800 leading-tight truncate w-[calc(100%-80px)]">
          {name}
        </h1>
        <div className="flex items-center gap-2">
          <Image
              src="/assets/Star.png"
              alt="star"
              width={28} // Define the width for mobile
              height={28} // Define the height for mobile
              className="sm:w-7 sm:h-7"
            />
          <span className="text-sm sm:text-lg font-medium mt-1 text-gray-800">({rating})</span>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 mb-3">
         <Image
              src="/assets/Icon.png"
              alt="location"
              width={16} 
              height={16} 
              className="sm:w-5 sm:h-5"
              
            />
        <span className="text-xs sm:text-sm text-gray-600">
          {location}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-snug">
        {des}{' '}
        <span className="text-green-600 cursor-pointer">Read More...</span>
      </p>

      {/* Visit Button */}
      <button className="w-full py-3 font-urbanist sm:py-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition">
        Visit
      </button>
    </div>
  </div>
  )
}

export default RestaurantCard;