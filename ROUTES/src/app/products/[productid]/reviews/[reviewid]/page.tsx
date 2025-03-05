import { redirect } from "next/navigation";
export default async function productReview({
    params
}:{
    params : Promise<{productid: string, reviewid: string}>;
})
{
    const {productid, reviewid} = await params;
    if (parseInt(reviewid) > 1000) {
        // notFound();
        redirect("/products");
      }
    return (
        <h1>
            Review {reviewid} of product {productid}
        </h1>
    )
}