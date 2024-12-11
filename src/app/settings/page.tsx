import Banner from "@/components/auth/Banner";
import AccountSettings from "@/components/shared/AccountSettings";
import Sidebar from "@/components/shared/Sidebar";


export default function SettingsPage(){
    return (
          <div>
          <Banner path="/assets/signInBanner.png"/>
          <div className="w-5/6 mx-auto">
              <div className="flex w-full my-4">
                  <div className=" w-1/5"><Sidebar/></div>
                  <div className="w-4/5"><AccountSettings/></div>
              </div>
          </div>
      </div>
    )
}