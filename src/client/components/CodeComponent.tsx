import React from "react";

interface Props {
  code?:string;
}

export default function CodeComponent({code}:Props) {
  if (!code) return null; 



  return (
    <div className="bg-zinc-900 rounded-2xl my-5">
      <pre className="overflow-x-auto text-zinc-200 px-7 py-2">
        <code>
          {code}
        </code>
      </pre>
    </div>
  );
}
