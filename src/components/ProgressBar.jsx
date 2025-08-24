export default function ProgressBar({ value=0 }){
  return (
    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-xl h-3 overflow-hidden">
      <div className="bg-brand-500 h-full" style={{ width: `${value}%`}} />
    </div>
  )
}
