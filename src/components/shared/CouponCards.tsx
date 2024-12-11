import PricingCard from "./PriceingCard";



const CouponCards: React.FC = () => {
    return (

      <div className="w-5/6 mx-auto">
           <h1 className="text-2xl font-bold text-gray-800 py-6 ">Coupon Cards</h1>
          <div className="flex flex-col gap-4 pb-20">
               <PricingCard/>
               <PricingCard/>
          </div>
      </div>
        
    )
}

export default CouponCards;