import React from "react";

interface Title{
    title: string; 
    body: string; 
}
const PageTitle1 = ({title, body }:Title) => {
  return (
    <section className="bg-white pt-[70px]">
      <div className="mx-auto sm:container">
        <div className="pb-2 ">
          <h2 className="mb-2 text-4xl font-semibold text-[#f05c21]">
            {title}
          </h2>
          <p className="mb-6 text-xl font-medium text-body-color ">
          {body}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageTitle1;
