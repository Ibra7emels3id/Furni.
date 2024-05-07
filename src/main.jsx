import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Shop from './pages/Shop.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './pages/Cart.jsx';
import CheckOut from './pages/CheckOut.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/shop",
        element: <Shop />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/services",
        element: <Services />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/CheckOut",
        element: <CheckOut />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)
