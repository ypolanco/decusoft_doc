"use client";
import React from 'react';
import { useParams } from 'next/navigation';

interface Section {
  heading: string;
  content: string;
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
    <div className="container p-8">
      <header className="text-4xl font-bold mb-8 text-center">{article.title}</header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">{article.introduction}</p>
      </section>

      {article.sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
          <p className="text-gray-700 leading-relaxed">{section.content}</p>
        </section>
      ))}

      <footer className="text-gray-500 mt-12 text-center">
        Need more help? Visit our{' '}
        <a href="/support" className="text-blue-600 hover:underline">
          support center
        </a>.
      </footer>
    </div>
  );
}
