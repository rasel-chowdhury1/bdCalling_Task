
interface BannerData {
  path: string; 
}

const Banner:React.FC<BannerData> = ({path}) => {
    return (
        <div className="relative w-full h-[80px] md:h-[120px] overflow-hidden">
        <img
        src={path}
        alt="Background"
        className="absolute inset-0 w-full h-[80px] md:h-[120px] object-cover brightness-50"
      />
      </div>
    )
}

export default Banner;