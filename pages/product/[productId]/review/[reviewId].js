import { useRouter } from "next/router";
const ReviewDetails = () => {
    const router = useRouter();
    const {reviewId, productId} = router.query;
    return (
        <div>
            <h1>Product Id {productId} for Review id {reviewId}</h1>
        </div>
    )
}
export default ReviewDetails;