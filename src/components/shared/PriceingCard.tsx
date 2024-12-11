
  
  const PricingCard: React.FC = () => {
    return (

      <div className="relative flex items-center w-full bg-white rounded-lg overflow-hidden p-4 sm:p-6 md:p-8 ">
      {/* Left Cutout */}
      <div className="absolute top-1/2 left-0 shadow-md border border-[#F8FAFC] -translate-y-1/2 w-4 h-10 sm:w-5 sm:h-12 md:w-6 md:h-14 bg-[#F8FAFC] rounded-r-full z-10"></div>
      {/* Border Mask for Left Cutout */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[1px] h-10 sm:h-12 md:h-14 bg-[#F8FAFC] z-20"></div>

      {/* Price Section */}
      <div className="flex flex-col items-center justify-center p-2 md:p-4">
        <span className="text-[#00B047] font-urbanist text-5xl sm:text-6xl md:text-8xl">Price</span>
        <span className="text-[#FF7D29] font-urbanist font-bold text-4xl sm:text-5xl md:text-7xl">$10.99</span>
      </div>

      {/* Dashed Divider */}
      <div className="h-[120px] sm:h-[160px] md:h-[210px] border-l-2 border-dashed border-gray-300 mx-4 sm:mx-6"></div>

      {/* Description Section */}
      <div className="flex-1 text-left pr-4 sm:pr-6 md:pr-8">
        <h3 className="text-[#1D242D] font-urbanist font-bold text-4xl sm:text-5xl md:text-7xl">Single Discount</h3>
        <p className="text-[#727272] font-montserrat font-medium text-2xl sm:text-3xl md:text-4xl">
          Customer takes 6 discount
        </p>
      </div>

      {/* Right Cutout */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-10 sm:w-5 sm:h-12 md:w-6 md:h-14 bg-[#F8FAFC] rounded-l-full z-10"></div>
      {/* Border Mask for Right Cutout */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[1px] h-10 sm:h-12 md:h-14 bg-[#F8FAFC] z-20"></div>
    </div>
    );
  };

  export default PricingCard;