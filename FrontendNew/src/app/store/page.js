
import ProductsList from "@/components/product/ProductsList";

export default function Store(){
    return (
        <div className="Store">
            <div className="Advertising">Advertising</div>
            <ProductsList title="Snacks & Munchies"/>
            <ProductsList title="Dairy, Bread & Eggs"/>
        </div>
    )
}