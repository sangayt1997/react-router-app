import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const navigateToProduct = () => {
        navigate('/products')
    }
    return (
        <>
            <h1>Home page</h1>
            <p>
                Go to <Link to="/products">the list of products</Link>
            </p>
            <button onClick={navigateToProduct}>Navigate to Products</button>
        </>
    );
}

export default Home;
