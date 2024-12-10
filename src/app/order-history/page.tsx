import Banner from "@/components/auth/Banner";
import Dashboards from "@/components/shared/Dashboards";
import OrderHistory from "@/components/shared/OrderHistory";
import Sidebar from "@/components/shared/Sidebar";


export default function OrderHistoryPage(){
    return (
          <div>
          <Banner path="/assets/signInBanner.png"/>
          <div className="w-5/6 mx-auto">
              <div className="flex w-full my-4">
                  <div className=" w-1/5"><Sidebar/></div>
                  <div className="w-4/5 m-4 border rounded-md p-4"><OrderHistory/> </div>
              </div>
          </div>
      </div>
    )
}