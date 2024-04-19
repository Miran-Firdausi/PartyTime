import styles from '@/styles/product/productInfo/ShopItem.module.css';
import ReactStars from 'react-stars'

export default function ShopItem(){
    return (
        <div className={styles.OuterContainer}>
            <div className={styles.ShopDetails}>
                <h3>Samrat Super Market</h3>
                <p>Symbiosis Campus</p>
                <div className={styles.Rating}>
                <p>4.5</p>
                <ReactStars
                edit={false}
                value={4.5}
                count={5} 
                size={20} 
                color2={'#f0cc00'} /> </div>
                <div className={styles.ShopInfo}>
                    <p className={styles.Open}>Open</p> 
                    <p className={styles.Closes}>Closes 9pm</p>
                </div>
            </div>
            <div className={styles.ShopImage}>
                <div><img src="https://content.jdmagicbox.com/comp/vaishali/k5/9999p6225.6225.180913071927.d7k5/catalogue/samrat-general-store-and-garments-vaishali-v8ncacxwab.jpg" alt="" /></div>
                <p className={styles.Distance}>400m</p>
            </div>
        </div>
    )
}
