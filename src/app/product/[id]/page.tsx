'use client'
import { useRouter, useParams } from 'next/navigation'
import { products } from '../../products'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProductPage() {
  const router = useRouter()
  const params = useParams<{ id: string }>()
  const product = products.find(p => p.id === params.id)
  if (!product) return <div>Not found</div>

  return (
    <AnimatePresence>
      <motion.div key={product.id}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => router.back()}
        />
        <div className="relative z-50 flex flex-col items-center pt-20">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-96 h-96 object-cover rounded"
            layoutId={`product-image-${product.id}`}
          />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg mt-8 w-[32rem] shadow"
          >
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <div className="mt-4 text-xl font-semibold">{product.price} ₽</div>
            <button
              className="mt-8 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => router.back()}
            >
              Назад
            </button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
