import ProductCard from './ProductCard'
import { products } from '../app/products'

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}