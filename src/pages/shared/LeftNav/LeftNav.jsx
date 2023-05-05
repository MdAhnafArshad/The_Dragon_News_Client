import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(data => data.json(data))
            .then(res => setCategories(res))
            .catch(err => console.error(err))
    }, [])
    
    return (
        <div>
            <h2>All Categories</h2>
            {
                categories.map(category => <p
                    key={category.id}
                    ><Link to={`category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftNav;