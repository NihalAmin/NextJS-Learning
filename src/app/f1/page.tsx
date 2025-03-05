import Link from "next/link";
export default function Page() {
    return (
        <div>
            <h1>Welcome to Page F1</h1>
            <div>
                 <Link href="/f1/f2"> F2</Link>
            </div>
        </div>
    );
}