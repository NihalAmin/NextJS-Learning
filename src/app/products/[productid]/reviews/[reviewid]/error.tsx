"use client";
export default function Home({error}:{error:Error}) {
    return (
        <div>{error.message}</div>
    )
}