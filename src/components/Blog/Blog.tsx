import React from 'react';

interface BlogProps {
  show: boolean;
}

const Blog: React.FC<BlogProps> = ({ show }) => {
  const blogEntries = [
    {
      title: "Building Interactive Space Animations with CSS",
      date: "December 20, 2025",
      excerpt: "Exploring how to create mesmerizing star field animations using pure CSS transforms and keyframes. Learn the techniques behind creating smooth, performant space-themed backgrounds."
    },
    {
      title: "The Magic of Component-Based Architecture",
      date: "December 15, 2025",
      excerpt: "Diving deep into modern web development patterns and how breaking down complex UIs into reusable components can transform your development workflow."
    },
    {
      title: "From Stars to Text: Advanced Animation Sequences",
      date: "December 10, 2025",
      excerpt: "A technical breakdown of creating complex animation sequences that tell a story. How to coordinate multiple elements to create seamless visual narratives."
    },
    {
      title: "Responsive Design in the Age of Flexible Layouts",
      date: "December 5, 2025",
      excerpt: "Mastering modern CSS Grid and Flexbox techniques to create layouts that adapt beautifully across all device sizes. Tips for building truly responsive experiences."
    },
    {
      title: "Performance Optimization: Making the Web Faster",
      date: "November 28, 2025",
      excerpt: "Essential strategies for optimizing web performance, from lazy loading images to efficient JavaScript bundling. Learn how to make your sites lightning fast."
    },
    {
      title: "The Art of Minimalist Web Design",
      date: "November 22, 2025",
      excerpt: "Exploring the principles of clean, minimal design and how less can truly be more. Creating impactful user experiences through thoughtful simplicity and purposeful whitespace."
    }
  ];

  return (
    <div className={`blog-modal ${show ? 'show' : ''}`}>
      <div className="blog-content">
        <h2>Blog</h2>
        <div className="blog-list">
          {blogEntries.map((entry, index) => (
            <article key={index} className="blog-entry">
              <h3>{entry.title}</h3>
              <p className="blog-date">{entry.date}</p>
              <p className="blog-excerpt">{entry.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;