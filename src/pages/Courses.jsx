import { useEffect, useMemo, useState } from 'react'
import CourseCard from '../components/CourseCard'

export default function Courses(){
  const [q, setQ] = useState('')
  const [level, setLevel] = useState('all')
  const [courses, setCourses] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5175/courses').then(r=>r.json()).then(setCourses).catch(()=>{
      // fallback to static data if server not running
      import('../data/courses.json').then(m => setCourses(m.default))
    })
  }, [])

  const filtered = useMemo(()=>{
    return courses.filter(c=>{
      const okQ = (c.title + ' ' + c.description).toLowerCase().includes(q.toLowerCase())
      const okLevel = level==='all' || c.level===level
      return okQ && okLevel
    })
  }, [courses, q, level])

  return (
    <div className="container py-8 space-y-6">
      <div className="flex flex-wrap gap-3 items-center">
        <input className="rounded-xl border-slate-300 dark:border-slate-700" placeholder="Search courses" value={q} onChange={e=>setQ(e.target.value)} />
        <select className="rounded-xl border-slate-300 dark:border-slate-700" value={level} onChange={e=>setLevel(e.target.value)}>
          <option value="all">All levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <span className="text-sm text-slate-500">{filtered.length} results</span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(c => <CourseCard key={c.id} course={c} />)}
      </div>
    </div>
  )
}
