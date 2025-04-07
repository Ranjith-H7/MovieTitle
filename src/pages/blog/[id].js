import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/Components/Navbar';

const BlogDetails = () => {
    const [blogDetail, setBlogDetail] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const blogs = JSON.parse(localStorage.getItem('myData'));
        const selectedBlog = blogs?.find(blog => blog.id === parseInt(id));
        setBlogDetail(selectedBlog);
    }, [id]);

    if (!blogDetail) {
        return <div className="text-center mt-20 text-gray-600">Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="max-w-3xl mx-auto mt-24 p-4 bg-white rounded shadow-md">
                <img
                    src={blogDetail.imageUrl}
                    alt="Blog"
                    className="w-full h-72 object-cover rounded"
                />
                <div className="mt-4">
                    <h1 className="text-3xl font-bold mb-2 text-green-700">{blogDetail.title}</h1>
                    <p className="text-gray-700 mb-4">{blogDetail.description}</p>
                    <p className="text-sm text-gray-500 mb-1">Author: {blogDetail.author}</p>
                    <p className="text-sm text-gray-500">Date: {blogDetail.date}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
