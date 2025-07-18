'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/product/${product.id}`}>
      <motion.div layoutId={`product-image-${product.id}`} className="bg-white rounded-lg shadow p-4 cursor-pointer">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded"
          layoutId={`product-image-${product.id}`}
        />
        <div className="mt-2">
          <div className="font-bold">{product.name}</div>
          <div className="text-gray-500">{product.price} ₽</div>
        </div>
      </motion.div>
    </Link>
  )
}