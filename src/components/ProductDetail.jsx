import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetail.css'; // Assuming you're adding a new CSS file for styling

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`, {
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="product-detail-container">
            <h1 className="product-detail-title">Detail Produk</h1>
            <div className="product-detail-content">
                <div className="product-image-container">
                    <img src={product.thumbnail} alt={product.title} className="product-image" />
                </div>
                <div className="product-info">
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-price">Harga: ${product.price}</p>
                    <p className="product-rating">Rating: {product.rating}</p>
                    <p className="product-discount">Diskon: {product.discountPercentage}%</p>
                    <p className="product-description">Deskripsi: {product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
