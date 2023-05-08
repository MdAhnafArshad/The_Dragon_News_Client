import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginLayout from '../Layout/LoginLayout';
import Main from '../Layout/Main';
import NewsLayout from '../Layout/NewsLayout';
import Category from '../pages/Home/Category/Category';
import News from '../pages/Home/News/News';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children:
            [
                {
                    path: '/',
                    element: <Navigate to="/category/0"></Navigate>
                },
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'register',
                    element: <Register></Register>
                }

            ],
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [

            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ],
    },

    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;