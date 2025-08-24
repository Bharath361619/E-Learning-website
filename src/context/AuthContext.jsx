import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const token = localStorage.getItem('token')
    const profile = localStorage.getItem('profile')
    if(token && profile){
      setUser(JSON.parse(profile))
    }
  }, [])

  const login = (profile) => {
    localStorage.setItem('token', 'demo-token')
    localStorage.setItem('profile', JSON.stringify(profile))
    setUser(profile)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('profile')
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
