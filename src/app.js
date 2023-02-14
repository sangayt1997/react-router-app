import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/product/products";
import MainLayout from "./pages/main-layout/main-layout";
import Error from "./pages/error/error";
import ProductsDetail from "./pages/products-detail/products-detail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/products/:productId',
                element: <ProductsDetail />
            },
        ]
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
