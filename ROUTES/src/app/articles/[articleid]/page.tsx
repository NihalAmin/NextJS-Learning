"use client";
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1>News Article #{articleId}</h1>
      <p>Reading in: {lang.toUpperCase()}</p>

     
      <div className="language-options">
        <Link href={`/articles/${articleId}?lang=en`}>English</Link> |
        <Link href={`/articles/${articleId}?lang=es`}>Es</Link> |
        
      </div>
    </div>
  );
}
