import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/product/products";
import MainLayout from "./pages/main-layout/main-layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
        ]
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
