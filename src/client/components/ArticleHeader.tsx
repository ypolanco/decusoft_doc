import React from "react";

interface Props{
    title: string; 
}

const ArticleHeader = ({title}:Props) => {
  return (
    <>
            <div className="w-full bg-zinc-100">
              <div className="hero-content mx-auto max-w-[666px] text-center">
                <h1 className="mb-5 text-3xl font-bold capitalize !leading-[1.208] text-dark sm:text-[42px] xl:text-5xl p-16">
                  {title}
                </h1>
          </div>
        </div>
    </>
  );
};

export default ArticleHeader;

