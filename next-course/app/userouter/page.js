"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const useroute = () => {
    const router =useRouter();
  return (
    <main>
    <h1 className="">Routing | Navigation</h1>

    <button onClick={() => router.push("about")}>about</button> 
    {/* this will navigate to about page  */}
    
    
  </main>
  )
}

export default useroute