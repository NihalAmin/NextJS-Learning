"use client";
import { useRouter} from "next/navigation"
export default function OrderProduct() {
    const Router = useRouter();
const handleclick = () => {
    console.log("order placed");
    Router.push("/")
}
    return (
        <div>
        <h1>Order Product</h1>
        <button onClick={handleclick}>place order</button>
        </div>
    );
}