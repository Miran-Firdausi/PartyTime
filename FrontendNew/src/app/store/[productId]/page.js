'use client'
import React, {useState, useEffect} from "react";
import ProductInfo from "@/components/product/productDetails/ProductInfo";
import { products } from "../page";
import ShopList from "@/components/product/productDetails/ShopList";
import styles from '@/styles/product/productInfo/productid.module.css'; // Import CSS module

export default function ProductDetails({ params }) {
  const { productId } = params;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/products/all/');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  const findProductById = (id) => {
    const product = products.find((product) => product.id === parseInt(id));
    if (product) {
      return product;
    }
    return null;
  };

  const product = findProductById(productId);

  if (!product) {
    return <h1>Product not found!</h1>;
  }

  const renderProductInfo = (title, info) => (
    <li>
      <span className={styles.title}>{title}</span> 
      {info ? <span className={styles.info}>{info}</span> : <span className={styles.info}>Information not available</span>}
    </li>
  );

  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.productInfo}>
        <ProductInfo product={product}/>
      </div>
      <div className={styles.shopList}>
        <ShopList />
      </div>
      <div className={styles.productDetails}>
        <h2>Product Details</h2>
        <ul>
          {renderProductInfo("Flavour", product.flavour)}
          {renderProductInfo("Unit", product.weight)}
          {renderProductInfo("Shelf Life", product.shelfLife)}
          {renderProductInfo("Manufacturer", product.manufacturer)}
          {renderProductInfo("Marketed By", product.marketedBy)}
          {renderProductInfo("Country Of Origin", product.countryOfOrigin)}
          {renderProductInfo("FSSAI License", product.fssaiLicense)}
          {renderProductInfo("Customer Care Details", "Email: info@partytime.com")}
          {renderProductInfo("Return Policy", "This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery.In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.")}
          {renderProductInfo("Expiry Date", product.sellers[0].expiry_date)}
          {renderProductInfo("Net Volume", product.weight)}
          {renderProductInfo("Packaging Type", product.packagingType)}
          {renderProductInfo("Seller", product.sellers[0].seller_name)}
          {renderProductInfo("Seller FSSAI", product.sellers[0].seller.license_number)}
          {renderProductInfo("Description", product.description)}
          {renderProductInfo("Disclaimer", "Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.")}
        </ul>
      </div>
    </div>
  );
}
