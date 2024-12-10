import Image from "next/image";

interface itemData {
    path: string; 
    name: string;
  }

const ItemLogo:React.FC<itemData> = ({path,name}) => {
    return (
        <div className="w-[113px] h-[113px] border-1 shadow-md flex flex-col items-center justify-center py-2 rounded-md ">
        <Image
            src={path}
            alt={name}
            width={44}
            height={52}
            />
        <p className=" text-[17.77px] font-semibold m-0">{name}</p>
        </div>
    )
}

export default ItemLogo;