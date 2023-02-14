import React from "react";
import { useParams } from "react-router-dom";

function ProductsDetail() {
    const params = useParams();

    return (
        <>
            <h1>Product Detail Page</h1>
            <p>{params.productId}</p>
        </>
    );
}

export default ProductsDetail;
