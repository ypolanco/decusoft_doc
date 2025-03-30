import React from "react";
import Title from "./Title";
import Link from "next/link"

// Article type for the parent component
interface Article {
  id: number;
  title:string;
  introduction:string
}

// Cards prop type for the parent component
interface CardsProps {
  data: Article[];
}

// SingleCard props type
interface SingleCardProps {
  CardDescription: string;
  CardTitle: string;
  titleHref: string;
  btnHref: string;
  Button: string;
}

// Cards component
const Cards = ({ data }: CardsProps) => {
  return (
    <section className="bg-gray-1 pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="">
          <Title title="Assignment"/>
        </div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          {data.map((item) => (
            <div key={item.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleCard
                CardTitle={item.title}
                titleHref="#"
                btnHref={`/article/${item.id}`}
                CardDescription={item.introduction}
                Button="Learn More"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;

// SingleCard component
const SingleCard = ({
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
  Button,
}: SingleCardProps) => {
  return (
    <div className="">
      <div className="mb-8 rounded-lg bg-white px-6 py-8 shadow-1 duration-300 hover:shadow-3 sm:px-8 lg:px-6 xl:px-8">
        <h3>
          <Link
            href={titleHref}
            className="mb-3 block text-lg font-bold leading-tight text-dark hover:text-primary sm:text-xl sm:leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight"
          >
            {CardTitle}
          </Link>
        </h3>
        <p className="mb-5 text-base font-medium leading-relaxed text-body-color">
          {CardDescription}
        </p>
        <a
          href={btnHref}
          className="group inline-flex items-center font-semibold text-primary"
        >
          {Button}
          <span className="pl-2 duration-300 group-hover:translate-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};
