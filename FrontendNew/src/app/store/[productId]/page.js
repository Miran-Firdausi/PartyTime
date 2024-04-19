'use client'
import ProductInfo from "@/components/product/productDetails/ProductInfo";
import { products } from "../page";
import ShopList from "@/components/product/productDetails/ShopList";
import styles from '@/styles/product/productInfo/productid.module.css'; // Import CSS module

export default function ProductDetails({ params }) {
  const { productId } = params;
  console.log(productId);
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
  return (
    <div className={styles["product-details-container"]}> {/* Use generated class name */}
      <div className={styles["product-info"]}> {/* Use generated class name */}
        <ProductInfo product={product}/>
      </div>
      <div className={styles["shop-list"]}> {/* Use generated class name */}
        <ShopList />
      </div>
    </div>
  );
}

