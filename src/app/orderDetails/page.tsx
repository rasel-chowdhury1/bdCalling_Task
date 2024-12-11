import Banner from "@/components/auth/Banner";
import OrderDetails from "@/components/shared/OrderDetails";
import Sidebar from "@/components/shared/Sidebar";

export default function OrderDetailsPage(){
    return (
        <div>
          <Banner path="/assets/signInBanner.png"/>
          <div className="w-5/6 mx-auto">
              <div className="flex w-full my-4">
                  <div className=" w-1/5"><Sidebar/></div>
                  <div className="w-4/5 mx-4 border rounded-md "><OrderDetails/> </div>
              </div>
          </div>
      </div>
    )
}