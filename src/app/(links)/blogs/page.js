import BlogCard from "@/components/blogs/BlogCard";
import React from "react";

const blogsData = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
    date: "May 15, 2023",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Frontend"],
    imgSrc: "/school.png"
  },
  {
    id: 2,
    title: "The Power of Next.js for SEO",
    excerpt:
      "Discover how Next.js server-side rendering can dramatically improve your website's search engine visibility.",
    date: "June 2, 2023",
    readTime: "8 min read",
    tags: ["Next.js", "SEO", "Web Development"],
    imgSrc: "/school.png"
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "A comprehensive guide to choosing between CSS Grid and Flexbox for your layout needs.",
    date: "June 10, 2023",
    readTime: "6 min read",
    tags: ["CSS", "Web Design", "Frontend"],
    imgSrc: "/school.png"
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    excerpt:
      "Learn the best practices for creating web applications that everyone can use, regardless of ability.",
    date: "June 18, 2023",
    readTime: "10 min read",
    tags: ["Accessibility", "Web Development", "Inclusive Design"],
    imgSrc: "/school.png"
  },{
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
    date: "May 15, 2023",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Frontend"],
    imgSrc: "/school.png"
  },
  {
    id: 2,
    title: "The Power of Next.js for SEO",
    excerpt:
      "Discover how Next.js server-side rendering can dramatically improve your website's search engine visibility.",
    date: "June 2, 2023",
    readTime: "8 min read",
    tags: ["Next.js", "SEO", "Web Development"],
    imgSrc: "/school.png"
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "A comprehensive guide to choosing between CSS Grid and Flexbox for your layout needs.",
    date: "June 10, 2023",
    readTime: "6 min read",
    tags: ["CSS", "Web Design", "Frontend"],
    imgSrc: "/school.png"
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    excerpt:
      "Learn the best practices for creating web applications that everyone can use, regardless of ability.",
    date: "June 18, 2023",
    readTime: "10 min read",
    tags: ["Accessibility", "Web Development", "Inclusive Design"],
    imgSrc: "/school.png"
  },{
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
    date: "May 15, 2023",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Frontend"],
    imgSrc: "/school.png"
  },
  {
    id: 2,
    title: "The Power of Next.js for SEO",
    excerpt:
      "Discover how Next.js server-side rendering can dramatically improve your website's search engine visibility.",
    date: "June 2, 2023",
    readTime: "8 min read",
    tags: ["Next.js", "SEO", "Web Development"],
    imgSrc: "/school.png"
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "A comprehensive guide to choosing between CSS Grid and Flexbox for your layout needs.",
    date: "June 10, 2023",
    readTime: "6 min read",
    tags: ["CSS", "Web Design", "Frontend"],
    imgSrc: "/school.png"
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    excerpt:
      "Learn the best practices for creating web applications that everyone can use, regardless of ability.",
    date: "June 18, 2023",
    readTime: "10 min read",
    tags: ["Accessibility", "Web Development", "Inclusive Design"],
    imgSrc: "/school.png"
  },{
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
    date: "May 15, 2023",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Frontend"],
    imgSrc: "/school.png"
  },
  {
    id: 2,
    title: "The Power of Next.js for SEO",
    excerpt:
      "Discover how Next.js server-side rendering can dramatically improve your website's search engine visibility.",
    date: "June 2, 2023",
    readTime: "8 min read",
    tags: ["Next.js", "SEO", "Web Development"],
    imgSrc: "/school.png"
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "A comprehensive guide to choosing between CSS Grid and Flexbox for your layout needs.",
    date: "June 10, 2023",
    readTime: "6 min read",
    tags: ["CSS", "Web Design", "Frontend"],
    imgSrc: "/school.png"
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    excerpt:
      "Learn the best practices for creating web applications that everyone can use, regardless of ability.",
    date: "June 18, 2023",
    readTime: "10 min read",
    tags: ["Accessibility", "Web Development", "Inclusive Design"],
    imgSrc: "/school.png"
  },{
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
    date: "May 15, 2023",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Frontend"],
    imgSrc: "/school.png"
  },
  {
    id: 2,
    title: "The Power of Next.js for SEO",
    excerpt:
      "Discover how Next.js server-side rendering can dramatically improve your website's search engine visibility.",
    date: "June 2, 2023",
    readTime: "8 min read",
    tags: ["Next.js", "SEO", "Web Development"],
    imgSrc: "/school.png"
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "A comprehensive guide to choosing between CSS Grid and Flexbox for your layout needs.",
    date: "June 10, 2023",
    readTime: "6 min read",
    tags: ["CSS", "Web Design", "Frontend"],
    imgSrc: "/school.png"
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    excerpt:
      "Learn the best practices for creating web applications that everyone can use, regardless of ability.",
    date: "June 18, 2023",
    readTime: "10 min read",
    tags: ["Accessibility", "Web Development", "Inclusive Design"],
    imgSrc: "/school.png"
  },
];

const page = () => {
  return (
    <div className="min-h-screen w-full bg-[#101010] text-white p-6 pt-20 pb-20">
      <header className="mb-12 flex w-full justify-center">
        <h1 className="text-3xl md:text-5xl cursor-default font-normal w-1/2  pb-5 text-center leading-14 bg-gradient-to-t from-white to-[#ffffffb5] bg-clip-text text-transparent">
          A Place of Thoughts and Experience
        </h1>
      </header>

      <main className="w-full ">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {blogsData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;
