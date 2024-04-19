import styles from '@/styles/product/productInfo/ShopList.module.css'
import ShopItem from './ShopItem'
export default function ShopList(){
    return (
        <div className={styles.OuterContainer}>
            <h2 className={styles.title}>Sellers near you</h2>
            <ShopItem />
            <ShopItem />
        </div>
    )
}