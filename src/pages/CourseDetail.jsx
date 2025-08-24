import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Accordion from '../components/Accordion'

export default function CourseDetail(){
  const { id } = useParams()
  const [course, setCourse] = useState(null)

  useEffect(()=>{
    const url = `http://localhost:5175/courses/${id}`
    fetch(url).then(r=>r.json()).then(setCourse).catch(async()=>{
      const mod = await import('../data/courses.json')
      setCourse(mod.default.find(c=> String(c.id)===String(id)))
    })
  }, [id])

  if(!course) return <div className="container py-8">Loading...</div>

  const syllabus = course.syllabus.map((title, i)=>({
    title,
    content: 'Lesson details and resources will appear here.'
  }))

  return (
    <div className="container py-8 grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 card p-5">
        <img src={course.banner} alt={course.title} className="rounded-xl w-full h-60 object-cover" />
        <h1 className="text-2xl font-bold mt-4">{course.title}</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">{course.description}</p>
        <h2 className="mt-5 mb-2 font-semibold">Syllabus</h2>
        <Accordion items={syllabus} />
      </div>
      <aside className="card p-5 h-fit">
        <div className="text-2xl font-bold">₹{course.price}</div>
        <div className="text-sm text-slate-500 mb-4">{course.level.title()} • {course.duration} hrs</div>
        <a href="/register" className="w-full block text-center px-4 py-2 rounded-xl bg-brand-500 text-white">Enroll</a>
      </aside>
    </div>
  )
}
