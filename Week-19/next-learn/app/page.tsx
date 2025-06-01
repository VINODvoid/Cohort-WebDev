"use client"
import { User } from "./user/page";


export default async function Home() {
  const data = await User();
  return (
    <div>
      {data?.name}
      <div>
      {data?.email}
      {data?.address.city}
      </div>
    </div>
  )
}


