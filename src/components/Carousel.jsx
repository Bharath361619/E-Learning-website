import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Carousel({ images=[], interval=3500 }){
  const [idx, setIdx] = useState(0)
  useEffect(()=>{
    const id = setInterval(()=> setIdx(i => (i+1)%images.length), interval)
    return ()=> clearInterval(id)
  }, [images.length, interval])
  return (
    <div className="relative overflow-hidden rounded-2xl h-64 md:h-80 card">
      <AnimatePresence>
        <motion.img
          key={idx}
          src={images[idx]}
          alt="slide"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>
    </div>
  )
}
