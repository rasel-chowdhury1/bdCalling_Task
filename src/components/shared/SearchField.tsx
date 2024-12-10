
interface SearchFieldProps {
    color: string; 
  }

const SearchField:React.FC<SearchFieldProps> = ({color}) => {
    return (
        <div className="w-4/6 border-2 flex justify-between  rounded-full">
            <div
        className={`flex items-center gap-[8px] cursor-pointer ${color} py-2 border rounded-l-full`}
        >
        <img
            src="https://dashboard.codeparrot.ai/api/assets/Z1gea2deGkfk0Ewy"
            alt="location-icon"
            className="mt-[2px] mx-4"
            width={18}
            height={18}
        />
        <div className="flex items-center gap-[8px]">
            <span className="font-kumbh text-[16px] font-normal leading-[22px] text-[#f8fafc]">
            Location
            </span>
            <img
            src="https://dashboard.codeparrot.ai/api/assets/Z1gea2deGkfk0Ewz"
            alt="dropdown-arrow"
            className="mt-[7.5px] mr-2"
            width={11}
            height={7}
            />
        </div>
            </div>
            <div className={`flex flex-row items-center justify-center ${color} rounded-full w-[30px] h-[30px] mr-2 mt-1`}>
          <img
            src="https://dashboard.codeparrot.ai/api/assets/Z1gcRWdeGkfk0Ewv"
            alt="search"
            className="cursor-pointer"
            width={30}
            height={30}
          />
        </div>
        </div>
    )
}

export default SearchField;