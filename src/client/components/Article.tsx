"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import CodeComponent from './CodeComponent';
import ArticleHeader from './ArticleHeader';
import Link from 'next/link'

interface Section {
  heading: string;
  content: string;
  code?:string;
}

interface Article {
  id: number;
  title: string;
  introduction: string;
  sections: Section[];
}

interface HelpDeskProps {
  data: Article[];
}

export default function Article({ data }: HelpDeskProps) {
  const params = useParams();
  const articleId = parseInt(params?.name as string, 10); // Ensure correct type handling

  const article = data.find((item) => item.id === articleId);

  if (!article) {
    return <p className="text-gray-600 text-center">Article not found.</p>;
  }

  return (
    <div className=" p-4">
        <div className="m-3">
        <Link href="/" className=" text-blue-600"> Return to Support Center</Link>
        </div>
        <ArticleHeader title={article.title}/>
      {/* <header className="text-4xl font-bold mb-8 text-center">{article.title}</header> */}
<div className="p-5">

<section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">{article.introduction}</p>
      </section>

      {article.sections.map((section, index) => (
        <section key={index} className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
          <p className="text-gray-700 leading-relaxed">{section.content}</p>
          {section.code && <CodeComponent code={section.code} />}

        </section>
      ))}


    
</div>


      <footer className="bg-zinc-100 p-4 text-gray-900 mt-12 text-center">
        Need more help? Visit our{' '}
        <Link href="/" className="text-blue-600 hover:underline">
          support center
        </Link>.
      </footer>
    </div>
  );
}
