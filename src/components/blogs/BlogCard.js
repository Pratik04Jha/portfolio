import Image from "next/image";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className=" rounded-lg group overflow-hidden w-160 h-53 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 border border-zinc-700">
      <div className="p-6 flex gap-6 w-full">
        <div className="overflow-hidden rounded-xl  w-80 h-40 ">
          <Image
            src={blog.imgSrc}
            width={100}
            height={100}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
              </div>
              <div>
                  
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm text-white">{blog.date}</span>
          <span className="text-xs bg-zinc-900 text-white px-2 py-1 rounded-full">
            {blog.readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{blog.title}</h3>
        <p className="text-white mb-4 line-clamp-2">{blog.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-zinc-900 text-gray-300 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
              </div>
      </div>
    </div>
  );
};

export default BlogCard;
