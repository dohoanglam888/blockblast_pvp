export default function Board({ board }) {
  return (
    <div className="grid grid-cols-8 gap-1 bg-slate-900 p-3 rounded-2xl">
      {board.flat().map((cell, index) => (
        <div
          key={index}
          className={`
            w-10
            h-10
            rounded-lg
            transition-all
            ${cell ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' : 'bg-slate-800'}
          `}
        />
      ))}
    </div>
  )
}