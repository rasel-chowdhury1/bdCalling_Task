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
      <div className="w-3/5 flex flex-col justify-center">
        <h1 className="text-2xl md:text-6xl font-bold text-black leading-tight font-roboto mb-2">
          Good <span className="text-orange-500 mb-2">food</span>, great memories
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mt-6 font-dmsans leading-relaxed mb-6 w-full block break-words">
        Enable diners to customize their booking by requesting a specific table location or view.
        </p>
        
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