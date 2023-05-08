import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCard/NewsCart';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    
    return (
        <div>
            {
                id && <h4>category {categoryNews.length}</h4>
            }
            {
                categoryNews.map(news => <NewsCart 
                    key={categoryNews._id}
                    news={news}
                    ></NewsCart>)
            }
        </div>
    );
};

export default Category;