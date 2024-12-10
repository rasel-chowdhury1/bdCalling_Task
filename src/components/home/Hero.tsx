import Image from "next/image"

const Hero: React.FC = () => {
    return (
        <>
        <div className="relative hidden md:flex justify-center">{/* Arrow Image */}
          <Image
            src="/assets/home/path.png"
            alt="Arrow"
            width={800}
            height={280}
            className="absolute"
          />
        </div>
       
       <div className="w-5/6 mx-auto flex flex-col md:flex-row border-2">
      {/** left side */}
      <div className="w-3/5 flex flex-col justify-center">
        <h1 className="text-4xl md:text-8xl font-bold text-black leading-tight font-roboto mb-2">
          Good <span className="text-orange-500 mb-2">food</span>, great memories
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mt-6 font-dmsans leading-relaxed mb-2">
          Enable diners to customize their booking by requesting a specific table location or view.
        </p>
        <div className="flex w-4/5 justify-between text-white py-2 px-4 rounded-full border border-gray-800">
          <div className="bg-green-500 flex">
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z1fEDO4ZL_Fz8l68"
            alt="Location Icon"
            className="w-full "
          />
          <span>Location</span>
          <span className="ml-2">▼</span>
          </div>
          <div className=" flex justify-center rounded-full">
          <Image
            src="/assets/Search.png"
            alt="search-icon"
            width={15}
            height={15}
            className="p-5 bg-green-500"
          />
          </div>
        </div>
      </div>
      {/** right side */}
      <div className="w-full md:w-3/5">
        
        <Image
          src="/assets/home/CoffeeShop.png"
          alt="Coffee Shop"
          width={685}
          height={621}
          className="rounded-lg"
        />
      </div>
        </div>
        </>
    )
}

export default Hero;