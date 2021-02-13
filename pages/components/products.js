import ProductsGrid from "./productsGrid";
import offlineProducts from '../../public/offlineData/products';
import ProductItem from "./productItem";

export default function Products() {
  return (
    <ProductsGrid>
      {
        offlineProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            rating={product.rating}
            img_url={product.img_url}
            price={product.price}
          />
        ))
      }
    </ProductsGrid>
  )
}