import Image from "next/image";

interface CommentData {
    data: {
        authorName : string,
        authorImage: string,
        rating: number,
        timeAgo: string,
        comment: string,
    }
  }

const CommentCard:React.FC<CommentData> = ({data}) => {
    const {authorName, authorImage, rating, timeAgo, comment} = data;
    return (
        <div className=" w-full md:w-4/6 flex flex-col gap-4 font-poppins border-b-2 my-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                        <Image
                            src={authorImage}
                            alt={authorName}
                            width={57}
                            height={57}
                            className="rounded-full object-cover"
                        />
                        <div className="flex flex-col gap-[2.5px]">
                            <h3 className="m-0 text-[19px] font-medium leading-[1.5] text-gray-900">
                            {authorName}
                            </h3>
                            <div className="flex items-center space-x-2 text-gray-600">
                            <span>{'⭐'.repeat(rating)}</span>
                            </div>
                        </div>
                        </div>
                        <span className="text-[19px] font-normal leading-[1.5] text-gray-500 text-right">
                        {timeAgo}
                        </span>
                    </div>
                    <p className="m-0 text-[19px] font-normal leading-[1.5] text-gray-400 mt-2 mb-4">{comment}</p>
                </div>
    )
}

export default CommentCard;