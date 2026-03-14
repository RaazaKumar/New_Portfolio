import React from 'react';
import './Pages.css';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      category: 'Design',
      date: 'Feb 23, 2025',
      title: 'Design Conferences in 2025',
      summary: 'Veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      imgSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      category: 'Development',
      date: 'Jan 15, 2025',
      title: 'Best Practices for React Developers',
      summary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      imgSrc: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <article className="article blog fade-in">
      <header>
        <h2 className="article-title">Blog</h2>
      </header>

      <ul className="blog-posts-list">
        {posts.map(post => (
          <li className="blog-post-item" key={post.id}>
            <a href="#">
              <figure className="blog-banner-box">
                <img src={post.imgSrc} alt={post.title} loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">{post.category}</p>
                  <span className="dot"></span>
                  <time dateTime="2025-02-23">{post.date}</time>
                </div>
                <h3 className="h3 blog-item-title">{post.title}</h3>
                <p className="blog-text">{post.summary}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Blog;
