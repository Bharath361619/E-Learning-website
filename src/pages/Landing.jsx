import Carousel from '../components/Carousel'

// Import banners from public folder
import banner1 from '/banners/banner1.png'
import banner2 from '/banners/banner2.png'
import banner3 from '/banners/banner3.png'

export default function Landing(){
  const images = [banner1, banner2, banner3,]

  return (
    <section className="container py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Upgrade your skills with modern courses
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Learn React, UI/UX, Data Science, and more with guided projects, bite-sized lessons, and real-world practice.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="/courses" className="px-4 py-2 rounded-xl bg-brand-500 text-white">Browse Courses</a>
            <a href="/register" className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700">Get Started</a>
          </div>
        </div>
        {/* ✅ Carousel with all 5 banners */}
        <Carousel images={images} />
      </div>
    </section>
  )
}
