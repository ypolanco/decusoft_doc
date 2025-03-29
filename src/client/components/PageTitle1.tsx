import React from "react";

interface Title{
    title: string; 
    body: string; 
}
const PageTitle1 = ({title, body }:Title) => {
  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto px-4 sm:container">
        <div className="border-b border-stroke ">
          <h2 className="mb-2 text-2xl font-semibold">
            {title}
          </h2>
          <p className="mb-6 text-sm font-medium text-body-color ">
          {body}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageTitle1;
