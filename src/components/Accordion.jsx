import { useState } from 'react'
export default function Accordion({ items=[] }){
  const [open, setOpen] = useState(null)
  return (
    <div className="space-y-2">
      {items.map((it, i)=> (
        <div key={i} className="border border-slate-200 dark:border-slate-800 rounded-xl">
          <button onClick={()=> setOpen(open===i ? null : i)} className="w-full text-left p-3 font-medium">
            {it.title}
          </button>
          {open===i && <div className="p-3 pt-0 text-sm text-slate-600 dark:text-slate-300">{it.content}</div>}
        </div>
      ))}
    </div>
  )
}
