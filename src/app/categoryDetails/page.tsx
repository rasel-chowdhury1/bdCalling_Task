import Banner from "@/components/auth/Banner";
import Image from "next/image";


export default function CategoryDetails() {
    return (
      <div>
         <Banner path="/assets/CategoriesBanner.png"/>

         <div className="w-5/6 mx-auto">
             <div className="flex gap-2">
                <div className="flex items-center my-4">
                    <div>
                        <div>
                        <Image
                        src="/assets/ProductImageSlider.png"
                        alt="Product"
                        className=""
                        width={92}
                        height={103}
                    />
                        </div>
                        <div>
                        <Image
                        src="/assets/ProductImageSlider.png"
                        alt="Product"
                        className=""
                        width={92}
                        height={103}
                    />
                        </div>
                        <div>
                        <Image
                        src="/assets/ProductImageSlider.png"
                        alt="Product"
                        className=""
                        width={92}
                        height={103}
                    />
                        </div>
                    </div>
                    <div>
                    <Image
                        src="/assets/Product.png"
                        alt="Product"
                        className=""
                        width={640}
                        height={453}
                    />
                    </div>
                </div>
                <div className="my-4">
                    <h3 className="text-5xl">Smart Freezer</h3>
                </div>
             </div>
         </div>
      </div>
    );
  }