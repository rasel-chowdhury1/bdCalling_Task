import Banner from "@/components/auth/Banner";
import Review from "@/components/shared/Review";

const ReviewComponent: React.FC = () => {
  return (
    <div>
      <Banner path="/assets/ShareReview.png"/>
      <Review/>
    </div>
  );
};

export default ReviewComponent;
