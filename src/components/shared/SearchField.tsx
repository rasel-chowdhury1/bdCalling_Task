
interface SearchFieldProps {
    color: string; 
  }

const SearchField:React.FC<SearchFieldProps> = ({color}) => {
    return (
        <div className="w-5/6 md:w-4/6 border-2 flex justify-between  rounded-full">
            <div
        className={`flex items-center gap-[8px] cursor-pointer ${color} py-2 border rounded-l-full`}
        >
        <img
            src="/assets/locationIcon.png"
            alt="location-icon"
            className="mt-[2px] mx-4"
            width={16}
            height={16}
        />
        <div className="flex items-center gap-[8px]">
            <span className="font-kumbh-sans text-sm font-normal leading-[22px] text-[#F8FAFC]">
            Location
            </span>
            <img
            src="/assets/down.png"
            alt="dropdown-arrow"
            className="mt-[7.5px] mr-2"
            width={11}
            height={7}
            />
        </div>
            </div>
            <div className={`flex flex-row items-center justify-center ${color} rounded-full w-[30px] h-[30px] mr-2 mt-1`}>
          <img
            src="/assets/Search2.png"
            alt="search"
            className="cursor-pointer"
            width={22}
            height={22}
          />
        </div>
        </div>
    )
}

export default SearchField;