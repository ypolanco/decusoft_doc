import React from "react";

interface Props {
    title:string;
}

const Title3 = ({title}:Props) => {
  return (
    <section className="bg-white py-8 border-b">
      <div className="px-4 sm:container">
        <div className="border-l-[5px] border-orange-500 pl-5">
          <h2 className="mb-2 text-2xl font-semibold text-dark ">
            {title}
          </h2>
          <p className="text-sm font-medium text-body-color">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices lectus sem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Title3;
