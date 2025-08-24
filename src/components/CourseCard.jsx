import { Link } from 'react-router-dom'

export default function CourseCard({ course }){
  return (
    <div className="card p-4 flex flex-col">
      <img src={course.banner} alt={course.title} className="rounded-xl h-40 w-full object-cover" />
      <h3 className="mt-3 font-semibold">{course.title}</h3>
      <p className="text-sm text-slate-500 line-clamp-2">{course.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-brand-600 font-medium">₹{course.price}</span>
        <Link to={`/courses/${course.id}`} className="text-sm underline">View</Link>
      </div>
    </div>
  )
}
