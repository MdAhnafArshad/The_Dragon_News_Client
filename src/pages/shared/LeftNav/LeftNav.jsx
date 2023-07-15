import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://the-dragon-news-server-six-teal.vercel.app/categories')
            .then(data => data.json(data))
            .then(res => setCategories(res))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <h2>All Categories</h2>
            {
                categories.map(category => <p
                    key={category.id}
                    ><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </>
    );
};

export default LeftNav;