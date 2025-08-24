import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useAuth } from '../context/AuthContext'

export default function Navbar(){
  const { user, logout } = useAuth()
  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <img src="/logo.svg" alt="logo" className="h-7" />
          <span>E‑Learning</span>
        </Link>
        <nav className="flex items-center gap-6">
          <NavLink to="/courses" className={({isActive})=> isActive ? 'text-brand-500' : ''}>Courses</NavLink>
          <NavLink to="/register" className={({isActive})=> isActive ? 'text-brand-500' : ''}>Register</NavLink>
          <NavLink to="/dashboard" className={({isActive})=> isActive ? 'text-brand-500' : ''}>Dashboard</NavLink>
          <ThemeToggle />
          {user ? (
            <button onClick={logout} className="px-3 py-1 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">Logout</button>
          ) : null}
        </nav>
      </div>
    </header>
  )
}
