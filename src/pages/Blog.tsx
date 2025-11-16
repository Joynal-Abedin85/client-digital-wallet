import React from "react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      description: "Learn how to use React Hooks effectively in your projects.",
      author: "John Doe",
      date: "Nov 10, 2025",
    },
    {
      id: 2,
      title: "Tailwind CSS Tips",
      description: "Enhance your UI with these Tailwind CSS tips and tricks.",
      author: "Jane Smith",
      date: "Nov 12, 2025",
    },
    {
      id: 3,
      title: "JavaScript Best Practices",
      description: "Write clean and maintainable JavaScript code.",
      author: "Alex Johnson",
      date: "Nov 14, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Blog
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Read our latest articles, tips, and tutorials to stay up-to-date with
        the latest trends.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
