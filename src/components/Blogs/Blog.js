
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'; // Import stylesheet
import { blogs } from '../Blogs/ListOfBlogs';
import axios from 'axios';
const Blog = () => {
    const postsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(blogs.length / postsPerPage);

    const handlePrevClick = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handleClick = (page) => {
        setCurrentPage(page);
    };
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/posts');
                setPosts(response.data.posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className='blog-container'>
            <h3 className='title'>Bài viết liên quan</h3>
            <ul className='ul-blog'>
                {currentPosts.map((post) => (
                    <li className='li-post' key={post.id}>


                        <div>
                            <Link to={`/BlogDetail/${post.id}`}>
                                <img className='blog-img' src={post.image} alt={post.title} />
                                <h3 className="blog-title">{post.title}</h3>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="pagination">
                <button onClick={handlePrevClick}>&lt;</button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => handleClick(index + 1)}>
                        {index + 1}
                    </button>
                ))}
                <button onClick={handleNextClick}>&gt;</button>

            </div>
        </div>
    );
};

export default Blog;




