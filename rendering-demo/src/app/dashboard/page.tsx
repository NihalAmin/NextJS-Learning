"use client"
import { useState } from "react";

export default function DashboardPage() {
    const [name,setName] = useState('');
   return (
   <div>
    <h1>dashboard</h1>
    <input value={name} onChange={(e) => setName(e.target.value)} />
   <p>hello</p>
   </div>
   );    
}