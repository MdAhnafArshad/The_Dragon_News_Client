import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {

    const news = useLoaderData();
    console.log( news ,"news2");



    return (
        <div>
            <h1>News</h1>
        </div>
    );
};

export default News;