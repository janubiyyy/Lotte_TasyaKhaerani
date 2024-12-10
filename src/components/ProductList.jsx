import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ProductList.css'; // Assuming you create an external CSS file for styles

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products", {
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="product-list-container">
            <h1 className="product-list-title">Daftar Produk</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.thumbnail} alt={product.title} className="product-image" />
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-brand">Brand: {product.brand}</p>
                        <p className="product-price">Harga: ${product.price}</p>
                        <p className="product-discount">Diskon: {product.discountPercentage}%</p>
                        <Link to={`/product/${product.id}`} className="product-detail-link">
                            Lihat Detail
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
