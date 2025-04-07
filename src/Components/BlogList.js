'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/Components/Navbar';
import Link from 'next/link';

function BlogList() {
    const [data, setData] = useState([]);
    const [expandedId, setExpandedId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const blogs = JSON.parse(localStorage.getItem('myData') || '[]');
        setData(blogs);
    }, []);

    const toggleExpanded = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    let filteredData = data;
    if (searchQuery.trim() !== '') {
        filteredData = data.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 mt-24">
                <input
                    type="text"
                    className="w-full p-2 mb-6 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredData.map((item) => (
                        <div key={item.id} className="bg-white rounded shadow hover:shadow-lg transition">
                            <img
                                src={item.imageUrl}
                                alt="Blog"
                                className="w-full h-48 object-cover rounded-t"
                            />
                            <div className="p-4">
                                <h5 className="text-xl font-semibold mb-2 text-green-700">{item.title}</h5>
                                <p className="text-gray-700 mb-3">
                                    {expandedId === item.id
                                        ? item.description
                                        : `${item.description.substring(0, 50)}...`}
                                </p>
                                <div className="text-sm text-gray-500 mb-2">
                                    <p className="mb-1">Posted by: {item.author}</p>
                                    <p>{item.date}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => toggleExpanded(item.id)}
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        {expandedId === item.id ? 'Show less' : 'Show more'}
                                    </button>
                                    <Link href={`/blog/${item.id}`}>
                                        <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded">
                                            Read more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogList;
