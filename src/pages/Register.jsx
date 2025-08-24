import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const steps = ['Account', 'Profile', 'Confirm']

export default function Register(){
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ email:'', password:'', name:'', interest:'React' })
  const { login } = useAuth()
  const nav = useNavigate()

  const next = () => setStep(s => Math.min(s+1, steps.length-1))
  const prev = () => setStep(s => Math.max(s-1, 0))

  const submit = (e) => {
    e.preventDefault()
    login({ name: form.name || 'Student', email: form.email })
    nav('/dashboard')
  }

  return (
    <div className="container py-8">
      <div className="card p-6 max-w-xl mx-auto">
        <div className="flex gap-2 mb-6">
          {steps.map((s, i)=> (
            <div key={s} className={`flex-1 h-2 rounded-full ${i<=step ? 'bg-brand-500' : 'bg-slate-200 dark:bg-slate-800'}`} />
          ))}
        </div>
        <form onSubmit={submit} className="space-y-4">
          {step===0 && (
            <>
              <input type="email" required placeholder="Email" className="w-full rounded-xl" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
              <input type="password" required placeholder="Password" className="w-full rounded-xl" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} />
            </>
          )}
          {step===1 && (
            <>
              <input type="text" placeholder="Full name" className="w-full rounded-xl" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
              <select className="w-full rounded-xl" value={form.interest} onChange={e=>setForm({...form, interest:e.target.value})}>
                <option>React</option>
                <option>UI/UX</option>
                <option>Data Science</option>
              </select>
            </>
          )}
          {step===2 && (
            <div className="text-sm text-slate-600 dark:text-slate-300">
              <p><strong>Email:</strong> {form.email}</p>
              <p><strong>Name:</strong> {form.name || '—'}</p>
              <p><strong>Interest:</strong> {form.interest}</p>
            </div>
          )}
          <div className="flex justify-between pt-2">
            <button type="button" onClick={prev} disabled={step===0} className="px-4 py-2 rounded-xl border">Back</button>
            {step<2 ? (
              <button type="button" onClick={next} className="px-4 py-2 rounded-xl bg-brand-500 text-white">Next</button>
            ) : (
              <button type="submit" className="px-4 py-2 rounded-xl bg-brand-500 text-white">Create account</button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
