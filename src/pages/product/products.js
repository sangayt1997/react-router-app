import React from "react";
import { Link } from "react-router-dom";

function Products() {
    const PRODUCTS = [
        { id: 'p1', title: 'Product 1' },
        { id: 'p2', title: 'Product 2' },
        { id: 'p3', title: 'Product 3' },
    ]
    return (
        <>
            <h1>Product page</h1>
            <ul>
                {PRODUCTS.map((items) => (
                    <li key={items.id}>
                        <Link to={`/products/${items.id}`}>
                            {items.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Products;
