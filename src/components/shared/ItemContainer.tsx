import ItemLogo from "./ItemLogo";



const ItemContainer:React.FC = () => {
    return (
        <div className="flex gap-2 flex-wrap my-12">
               <ItemLogo path="/assets/items/cup.png" name="Milk" />
               <ItemLogo path="/assets/items/cup.png" name="Milk"/>
               <ItemLogo path="/assets/items/cup.png" name="Milk"/>
               <ItemLogo path="/assets/items/tShirt.png" name="T Shirt"/>
               <ItemLogo path="/assets/items/Desert.png" name="Desert"/>
               <ItemLogo path="/assets/items/PinWheel.png" name="Toy"/>
               <ItemLogo path="/assets/items/Book.png" name="Book"/>
               <ItemLogo path="/assets/items/Desert.png" name="Desert"/>
               <ItemLogo path="/assets/items/spool.png" name="Noodles"/>
               <ItemLogo path="/assets/items/cup.png" name="Milk" />
               <ItemLogo path="/assets/items/spool.png" name="Noodles"/>
               <ItemLogo path="/assets/items/Desert.png" name="Desert"/>
            </div>
    )
}

export default ItemContainer;