import Banner from "@/components/auth/Banner";
import CommentCard from "@/components/shared/CommetCard";
import IconButton from "@/components/shared/IconButton";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";


export default function CategoryDetails() {
    const Category = {
        sliderImages: ["/assets/ProductImageSlider.png", "/assets/ProductImageSlider.png", "/assets/ProductImageSlider.png"],
        Image: "/assets/Product.png",
        name: "Smart Freezer",
        ReviewCount: 4,
        Details: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ",
        Price: 17.28,
        Quantity: 1
    }

    const review = {
        authorName : 'Kristin Watson',
        authorImage:'/assets/reviews/user1.png',
        rating:5,
        timeAgo:'2 min ago',
        comment:'Duis at ullamcorper nulla, eu dictum eros.',
      }
    
    const commentData = [
        {
            authorName : 'Kristin Watson',
            authorImage:'/assets/reviews/user1.png',
            rating:5,
            timeAgo:'2 min ago',
            comment:'Duis at ullamcorper nulla, eu dictum eros.',
        },
        {
            authorName : 'Jane Coope',
            authorImage:'/assets/reviews/user2.png',
            rating:4,
            timeAgo:'30 Apr, 202',
            comment:'Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.',
          },
          {
            authorName : 'Jacob Jones',
            authorImage:'/assets/reviews/user3.png',
            rating:5,
            timeAgo:'2 min ago',
            comment:' Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.',
        },
        {
            authorName : 'Ralph Edwards',
            authorImage:'/assets/reviews/user4.png',
            rating:5,
            timeAgo:'2 min ago',
            comment:"200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Cantons Choice, Bok Choi, from USA",
        },
    ]



    return (
      <div>
         <Banner path="/assets/CategoriesBanner.png"/>

         <div className="w-5/6 mx-auto">
             <div className="flex flex-col md:flex-row gap-2">
                {/** left side */}
                <div className="flex items-center my-4">
                    <div className="grid grid-cols-1 justify-items-center space-y-2 md:space-y-8">
                        <IoIosArrowUp size={20}/>
                        <div className="flex flex-col gap-2 mr-2">
                            {Category.sliderImages.map((path,idx) => (
                               <div>
                               <Image
                               src={path}
                               key={idx}
                               alt="Product"
                               className=""
                               width={92}
                               height={103}
                               />
                             </div>
                            ))}
                        </div>
                        <IoIosArrowDown size={20}/>
                    </div>

                    <div>
                        <Image
                            src={Category.Image}
                            alt="Product"
                            className=""
                            width={640}
                            height={453}
                        />
                    </div>
                    
                </div>

                {/** right side */}
                <div className="my-4 max-w-4xl mx-auto p-6 bg-white shadow rounded flex flex-col justify-between">

                    {/** name and review */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <h1 className="text-xl md:text-4xl font-bold text-gray-800">{Category.name}</h1>
                                <span className="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded">
                                In Stock
                                </span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <span>{'⭐'.repeat(5)}</span>
                            <span>{Category.ReviewCount} Reviews</span>
                        </div>
                        <div className="text-xl md:text-2xl font-semibold text-gray-900">${Category.Price}</div>
                    </div>
                    
                    {/** category  */}
                    <div className="flex flex-col gap-2">
                        <div className="text-gray-600">
                            <span className="text-lg font-bold">Category:</span> Freeze
                        </div>
                        <p className="text-gray-700 text-base">{Category.Details} </p>
                    </div>
                    
                    {/** add,checkout and cart button */}
                    <div>
                        <div className="flex items-center">
                            <div className="mt-4 flex flex-col md:flex-row w-full gap-2">
                                <div className="flex items-center justify-center gap-2 p-2 bg-white border rounded-full w-fit h-fit border-gray-300 ">
                                    <IconButton>-</IconButton>
                                    <span className="w-12 text-center font-medium text-gray-800">{Category.Quantity}</span>
                                    <IconButton>+</IconButton>
                                </div>

                                <button
                                className="flex items-center justify-center gap-4 bg-orange-500 rounded-full border-none py-2 px-12 cursor-pointer w-full max-w-[514px] h-[59px] transition-opacity duration-200 hover:opacity-90 grow"
                                >
                                <span className="text-white font-poppins text-lg font-semibold leading-[120%]">
                                    Checkout
                                </span>
                                <img
                                    src="https://dashboard.codeparrot.ai/api/assets/Z1j66m6v0cxbqCCo"
                                    alt="cart"
                                    className="w-[17px] h-[17px] object-contain"
                                />
                                </button>

                                <button className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full text-lg font-bold text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">
                                <LuShoppingCart />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

             </div>

             {/** comment section */}
             <div>
                <h3 className="text-4xl font-semibold my-4">Comments: </h3>
                {commentData.map((comment, idx) => (
                    <CommentCard key={idx} data={comment}/>
                ))}
                
             </div>
         </div>
      </div>
    );
  }