"use client"; // Ensure the component is a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
  const pathname = usePathname(); // Retrieve the current path
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '/assets/dashboard/dashboard.png', path: '/dashboard' },
    { id: 'order-history', label: 'Order History', icon: '/assets/dashboard/order.png', path: '/order-history' },
    { id: 'wishlist', label: 'Wishlist', icon: '/assets/dashboard/Wishlist.png', path: '/wishlist' },
    { id: 'cart', label: 'Shopping Cart', icon: '/assets/dashboard/ShippingCart.png', path: '/cart' },
    { id: 'settings', label: 'Settings', icon: '/assets/dashboard/settings.png', path: '/settings' },
    { id: 'logout', label: 'Log-out', icon: '/assets/dashboard/logout.png', path: '/logout' },
  ];

  return (
    <div>
      <div className="hidden md:block max-w-[250px] bg-white border-[1.15px] border-[#e6e6e6] rounded-[9.21px] flex flex-col pb-[13.82px]">
        <div className="px-[23.03px] pt-[27.64px] pb-[18.42px]">
          <h2 className="font-poppins font-medium text-[20px] leading-[150%] text-[#1a1a1a] m-0">
            Navigation
          </h2>
        </div>
        <div className="flex flex-col">
          {menuItems.map((item) => (
            <Link href={item.path}
              key={item.id}
              className={`flex items-center gap-[11.52px] px-[23.03px] py-[18.42px] cursor-pointer transition-colors duration-300 ${
                pathname === item.path ? 'bg-[#fdeee9] border-l-4 border-red-500' : ''
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-[27.64px] h-[27.64px] object-contain"
              />
              <span
                className={`font-poppins text-[16px] leading-[150%] ${
                  pathname === item.path ? 'text-[#1a1a1a]' : 'text-[#666666]'
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="md:hidden bg-white border-[1.15px] border-[#e6e6e6] rounded-[9.21px]">
        {menuItems.map((item) => (
          <Link href={item.path}
            key={item.id}
            className={`flex items-center gap-[11.52px] px-[23.03px] py-[18.42px] cursor-pointer transition-colors duration-300 ${
              pathname === item.path ? 'bg-[#fdeee9]' : ''
            }`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-[27.64px] h-[27.64px] object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
