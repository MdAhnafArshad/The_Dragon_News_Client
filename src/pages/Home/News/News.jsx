import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <h1>news</h1>
        </div>
    );
};

export default News;