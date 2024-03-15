import Product from "@/components/product/ProductItem";

export default function testcomponent(){
    return <Product 
        name = "Lays Classic Family Size"
        originalPrice = "30"
        discountedPrice = "25"
        image = "/images/product/Lays.png"
        weight  = "200g"
    />
}