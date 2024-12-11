

interface StarRatingBarProps {
    rating?: number;
    maxRating?: number;
    totalRatings?: number;
    barColor?: string;
    barBackgroundColor?: string;
    starColor?: string;
  }

const StarRatingBar = ({
    rating = 5,
    maxRating = 6,
    barColor = '#232323',
  }: StarRatingBarProps) => {
    const percentage = (rating / maxRating) * 100;
  
    return (
      <div className="flex items-center gap-4 h-[29px]">
        <div className="flex items-center ">
          <span className="font-roboto text-2xl font-bold text-[#f8B84E]  leading-[110%]">
            {rating}
          </span>
          <img 
            src="https://dashboard.codeparrot.ai/api/assets/Z12F9xvKm34Nfumh" 
            alt="star" 
            className="w-[22.97px] h-[22.97px] md:mr-8" 
          />
        </div>
        <div className="w-[280.59px] md:w-[613.59px] h-[13.13px] bg-[#E5E5E5] rounded-full overflow-hidden mt-2">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${percentage}%`, backgroundColor: barColor }}
          ></div>
        </div>
      </div>
    );
  };



const StarRatingInput: React.FC = () => {
  

  const rating = 2;
 const  maxStars = 5;
 const  size = 62.79;

  return (
    <div className="flex items-center gap-[41.86px] my-16">
      {[...Array(maxStars)].map((_, index) => (
        <div
          key={index}
          className={`flex justify-center items-center cursor-pointer ${
            index < rating ? '' : 'opacity-50'
          }`}
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          {index < rating ? (
            <img
              src={`https://dashboard.codeparrot.ai/api/assets/Z12RPhvKm34Nfumr`}
              alt="filled star"
              width={size}
              height={size}
            />
          ) : (
            <img
              src={`https://dashboard.codeparrot.ai/api/assets/Z12RPhvKm34Nfums`}
              alt="empty star"
              width={size}
              height={size}
            />
          )}
        </div>
      ))}
    </div>

  );
};

const Review: React.FC = () => {
    const rating = 4.8;
    const totalReviews = 5922;
    const totalRatings = 164002;
    return (
       <div className="w-5/6 mx-auto">
          <div className="flex flex-col md:flex-row md:gap-[200px] items-center ">

              <div className="flex flex-col items-center gap-4 w-fit h-fit">
                  <div className="flex flex-row items-center gap-2">
                      <span className="font-roboto text-5xl font-medium text-[#232323] leading-[110%]">
                      {rating}
                      </span>
                      <img 
                      src="https://dashboard.codeparrot.ai/api/assets/Z12F9xvKm34Nfumg" 
                      alt="star" 
                      className="w-[45.94px] h-[45.94px]" 
                      />
                  </div>
                  <div className="font-kumbh text-2xl font-normal leading-[110%] text-center text-[#232323]">
                      {new Intl.NumberFormat('en-IN').format(totalRatings)} Ratings
                      <br />&<br />
                      {new Intl.NumberFormat('en-US').format(totalReviews)} Reviews
                  </div>
              </div>

              <div className="mt-5">
              {[5, 4, 3, 2, 1].map((rating) => (
                  <StarRatingBar key={rating} rating={rating} totalRatings={100} />
              ))}
              </div>
          </div>

          <div className="mt-10">
            <StarRatingInput />
          </div>
          
          <p className="font-kumbh-sans text-xl md:text-3xl text-[#232323] leading-[110%] my-4 md:my-2">
        Please share your opinion about the product
      </p>
      <div className="bg-[#dfe1e3] rounded-lg p-4 w-full min-h-[150px] md:min-h-[251.17px] mb-8 md:mb-16">
        <label className="block font-kumbh text-lg font-normal leading-[160%] text-[#575858] mb-4">
          Your review
        </label>
        <textarea
          className="w-full h-[120px] md:h-[200px] bg-transparent border-none outline-none font-kumbh text-base leading-6 resize-none text-[#575858]"
        />
      </div>

      <button
        className="w-full max-w-[90%] md:max-w-[1521px] h-[50px] md:h-[83.72px] bg-black text-white font-kumbh text-base md:text-lg uppercase tracking-wider rounded-lg flex items-center justify-center my-8 md:my-12"
      >
        Send Review
      </button>
          
       </div>
    )
}

export default Review;