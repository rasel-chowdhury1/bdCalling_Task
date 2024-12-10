
interface BannerData {
  path: string; 
}

const Banner:React.FC<BannerData> = ({path}) => {
    return (
        <div className="relative w-full h-44 overflow-hidden">
        <img
        src={path}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      </div>
    )
}

export default Banner;