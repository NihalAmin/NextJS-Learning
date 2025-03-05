import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>hello world</h1>
      <Link href={"/blog"}>blog </Link>
      <Link href={"/products"}>products</Link>
      <Link href={"/articles/breaking-news-123?lang=en"}  > read in english</Link>
    </div>
    
  );
}
