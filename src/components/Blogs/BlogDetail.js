import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from './ListOfBlogs'; // Đảm bảo đường dẫn đúng
import axios from 'axios';

const BlogDetail = () => {

    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Fetch post details from your API
        fetch(`http://localhost:8080/api/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data.post))
            .catch(error => console.error('Error fetching post details:', error));
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className='blog-detail-container'>
            <h1 className='blog-detail-title'>{post.title}</h1>
            <img className='blog-detail-img' src={post.image} alt={post.title} />
            <p className='blog-detail-excerpt'>{post.excerpt}</p>
            <p className='blog-detail-date'>{post.date}</p>
        </div>
    );

};

export default BlogDetail;
