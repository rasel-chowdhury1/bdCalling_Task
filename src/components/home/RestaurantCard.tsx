import Image from "next/image";

const RestaurantCard:React.FC = () => {
  return (
    <div className="w-full max-w-md sm:max-w-[471px] h-auto rounded-2xl border border-gray-300 bg-white overflow-hidden relative shadow-md">
    {/* Image Section */}
    <div className="w-full h-56 sm:h-[308px]">
      <Image
        src="/assets/home/Restaurant.png"
        alt="Restaurant"
        className=" m-2"
        width={430}
        height={321}
      />
    </div>

    {/* Content Section */}
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <h1 className="text-lg sm:text-2xl font-medium text-gray-800 leading-tight truncate w-[calc(100%-80px)]">
          Trattoria dall'Oste
        </h1>
        <div className="flex items-center gap-2">
          <img
            src="https://placeholder.pics/svg/3:2065"
            alt="star"
            className="w-6 sm:w-8 h-6 sm:h-8"
          />
          <span className="text-sm sm:text-lg font-medium text-gray-800">(4.5)</span>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 mb-3">
        <img
          src="https://placeholder.pics/svg/3:2069"
          alt="location"
          className="w-5 sm:w-6 h-5 sm:h-6"
        />
        <span className="text-xs sm:text-sm text-gray-600">
          Via Luigi Alamanni, 3, 50123 Firenze
        </span>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-snug">
        Featuring seasonal and sustainable seafood that is flown in fresh
        daily, our chef-driven menu proves that no matter when you're dining,
        seafood can be truly exceptional.{' '}
        <span className="text-green-600 cursor-pointer">Read More...</span>
      </p>

      {/* Visit Button */}
      <button className="w-full py-3 sm:py-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition">
        Visit
      </button>
    </div>
  </div>
  )
}

export default RestaurantCard;