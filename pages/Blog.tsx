
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-white py-16 text-center border-b border-gray-100">
        <h1 className="text-5xl font-serif font-bold text-primary-900">Travel Journal</h1>
        <p className="text-gray-500 mt-4">Inspiration, tips, and stories from the road.</p>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-[12px] mb-6 aspect-video">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-gray-400 mb-3">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                <span className="text-gold-600">{post.category}</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-900 mb-3 group-hover:text-gold-600 transition-colors">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
              <span className="text-sm font-bold uppercase tracking-widest border-b border-primary-900 pb-1 inline-block group-hover:border-gold-600 transition-colors">Read Article</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
