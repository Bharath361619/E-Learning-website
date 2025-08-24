import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Accordion from '../components/Accordion'

export default function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    const url = `http://localhost:5175/courses/${id}`

    fetch(url)
      .then(r => r.json())
      .then(setCourse)
      .catch(async () => {
        // fallback: load from local JSON
        const mod = await import('../data/courses.json')
        const match = mod.default.find(
          c => String(c.id) === String(id).trim()
        )
        setCourse(match || null)
      })
  }, [id])

  if (!course) {
    return (
      <div className="container py-8 text-slate-500">
        Course not found.
      </div>
    )
  }

  const syllabus = course.syllabus?.map((title, i) => ({
    title,
    content: 'Lesson details and resources will appear here.'
  })) || []

  return (
    <div className="container py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <img
            src={course.banner}
            alt={course.title}
            className="rounded-xl w-full h-64 object-cover"
          />
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-slate-600 dark:text-slate-300">
            {course.description}
          </p>
          {syllabus.length > 0 && (
            <Accordion items={syllabus} />
          )}
        </div>
        <aside className="space-y-4">
          <div className="card p-4">
            <div className="text-2xl font-bold">
              ₹{course.price}
            </div>
            <button className="w-full mt-4 px-4 py-2 rounded-xl bg-brand-500 text-white">
              Enroll Now
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}
