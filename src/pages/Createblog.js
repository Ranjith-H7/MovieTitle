'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/Components/Navbar';

const Createblog = () => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [data, setData] = useState([]);

    // Load blogs from localStorage on component mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const blogs = JSON.parse(localStorage.getItem('myData') || '[]');
            setData(blogs);
        }
    }, []);

    // Automatically save to localStorage whenever `data` changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('myData', JSON.stringify(data));
        }
    }, [data]);

    const addData = () => {
        // Basic validation
        if (!author || !title || !description || !imageUrl) {
            alert('Please fill out all fields');
            return;
        }

        const currentDate = new Date().toLocaleDateString();
        const newData = {
            id: data.length + 1,
            author,
            date: currentDate,
            title,
            description,
            imageUrl
        };

        const updatedData = [...data, newData];
        setData(updatedData);

        // Clear form fields
        setAuthor('');
        setTitle('');
        setDescription('');
        setImageUrl('');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="mt-24 px-4">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create a Blog</h2>

                    <input
                        type="text"
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <input
                        type="text"
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Image URL"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <button
                        onClick={addData}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold shadow-md transition duration-300"
                    >
                        Add Blog
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Createblog;
