import Image from "next/image";


const Services: React.FC = () => {
    const features = [
        {
          id: '1',
          title: 'Discount',
          description: 'Every week new sales',
          path: "/assets/home/Discount.png"
        },
        {
          id: '2',
          title: 'Free Delivery',
          description: '100% Free for all orders',
          path: "/assets/home/dTrack.png"
        },
        {
          id: '3',
          title: 'Great Support 24/7',
          description: 'We care your experiences',
           path: "/assets/home/24hours.png"
        },
        {
          id: '4',
          title: 'Secure Payment',
          description: '100% Secure Payment Method',
           path: "/assets/home/shield.png"
        },
      ];

    return (
        <div className="w-5/6 mx-auto">
           <div className="w-5/6 mx-auto">
            <div className="flex flex-wrap justify-around items-center bg-white border-1 my-1 p-10 rounded-lg shadow-md gap-6">
                {features.map((feature) => (
                    <div
                    key={feature.id}
                    className="flex flex-row items-center text-gray-800 gap-3 p-4 w-full sm:w-auto sm:max-w-sm"
                    >
                    <Image
                        src={feature.path}
                        alt={feature.title}
                        width={40}
                        height={40}
                        className="flex-shrink-0"
                    />
                    <div>
                        <h3 className="text-sm font-medium uppercase">{feature.title}</h3>
                        <p className="text-xs font-normal text-gray-500">{feature.description}</p>
                    </div>
                    </div>
                ))}
                </div>
           </div>
        </div>
    )
}

export default Services;