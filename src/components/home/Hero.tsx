import Image from "next/image"
import SearchField from "../shared/SearchField";

const Hero: React.FC = () => {
    return (
        <>
        <div className="relative hidden md:flex justify-center">{/* Arrow Image */}
          <Image
            src="/assets/home/path.png"
            alt="Arrow"
            width={630}
            height={200}
            className="absolute"
          />
        </div>
       
       <div className="w-5/6 mx-auto flex flex-col md:flex-row ">
      {/** left side */}
      <div className="w-full md:w-3/5 flex flex-col justify-center">

        <div className="">
        <h1 className="text-4xl font-roboto md:text-6xl lg:text-7xl font-bold text-black leading-[110%] font-roboto md:mb-2">
          Good <span className="text-orange-500 ">food</span>, great memories
        </h1>
        <p className="font-dm-sans text-xl md:text-2xl text-gray-700 mt-6 font-dmsans leading-[28px] mb-6 w-full block break-words">
        Enable diners to customize their booking by requesting a specific table location or view.
        </p>
        </div>
        
        <SearchField color="bg-green-500"/>
        
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