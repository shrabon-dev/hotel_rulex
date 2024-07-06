import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider } from 'react-router-dom';
import router from './route.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
)
