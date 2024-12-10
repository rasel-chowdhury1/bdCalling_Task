import ItemContainer from "@/components/shared/ItemContainer";
import ProductItemContainer from "@/components/shared/ProductItemContainer";

export default function ProductItems() {
    return (
      <div className="w-5/6 mx-auto">
        <ItemContainer/>
        <ProductItemContainer />
      </div>
    );
  }