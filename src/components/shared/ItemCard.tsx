import Image from "next/image";
interface ItemCardData {
    path: string; 
    name: string;
    des: string;
    price: string;
  }

const ItemCard:React.FC<ItemCardData> = ({path,name,des,price}) => {
    return (
         <div className=" shadow-md rounded-md">
            <Image
            src={path}
            alt="Coffee Shop"
            width={492}
            height={222}
            className="rounded-lg"
            />
            <div className="w-full max-w-[492px] h-auto bg-white p-6 sm:p-[40px_36px] flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-[8px]">
  <div className="flex flex-col gap-2 sm:gap-[7px]">

            <h1 className="font-semibold text-2xl">
            {name}
            </h1>
            <p className="text-xl">
            {des}
            </p>
        </div>
        <div className="font-bold text-3xl">
            {price}
        </div>
        </div>
            
         </div>
    )
}

export default ItemCard;