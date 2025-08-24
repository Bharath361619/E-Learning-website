import ProgressBar from '../components/ProgressBar'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Dashboard(){
  const { user } = useAuth()
  const [progress, setProgress] = useState({})

  useEffect(()=>{
    // mock progress storage
    const p = JSON.parse(localStorage.getItem('progress') || '{}')
    setProgress(p)
  }, [])

  const update = (id, val) => {
    const next = { ...progress, [id]: val }
    setProgress(next)
    localStorage.setItem('progress', JSON.stringify(next))
  }

  const courses = [1,2,3].map(i => ({
    id: i, title: ['React Essentials','UI/UX Foundations','Data Science 101'][i-1]
  }))

  return (
    <div className="container py-8 space-y-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.name || 'Student'} 👋</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map(c => (
          <div key={c.id} className="card p-4">
            <h3 className="font-semibold mb-2">{c.title}</h3>
            <ProgressBar value={progress[c.id] || 0} />
            <div className="flex gap-2 mt-3">
              {[0,25,50,75,100].map(v => (
                <button key={v} onClick={()=>update(c.id, v)} className="px-3 py-1 rounded-xl border">{v}%</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
