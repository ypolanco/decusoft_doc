import React from "react";

interface Props {
    title:string; 
}

const Title = ({title}:Props) => {
  return (
    <section className="">
      <div className="mx-auto sm:container">
        <div>
          <h2 className="mb-5 text-2xl font-semibold text-dark">
           {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Title;
