import React from 'react'
import Link from "next/link"

export default function TopicsFilter() {
const list = [
      "Reset via email",
      "Password strength tips",
      "Two-factor authentication",
      "Live chat support",
      "Email support",
      "Phone support",
      "Incorrect password",
      "Resetting your password",
      "Clearing browser cache",
      "Changing email address",
      "Updating phone number",
      "Managing personal details",
      "Enabling 2FA",
      "Using authentication apps",
    ]
  return (
    <div className="bg-white rounded-xl p-3 shadow mr-4">
       <div className="text-2xl font-semibold p-1">Top Topics</div> 
    <div className="">
        {list.map((item, i) => 
        <div className="text-xl  text-zinc-700 p-1" key={i}>
    <Link href={"/"}>{item}</Link>
           
        </div>
            )}
    </div>
    </div>
  )
}
