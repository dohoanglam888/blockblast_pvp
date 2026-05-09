import { useGameStore } from '../store/gameStore'

export default function Board({ board }) {
  const place = useGameStore(state => state.place)

  function handleDrop(e, row, col) {
    const shapeIndex = Number(
      e.dataTransfer.getData('shapeIndex')
    )

    place(shapeIndex, row, col)
  }

  return (
    <div className="grid grid-cols-8 gap-1 bg-slate-900 p-3 rounded-2xl">
      {board.map((row, y) =>
        row.map((cell, x) => (
          <div
            key={`${y}-${x}`}
            onDragOver={e => e.preventDefault()}
            onDrop={e => handleDrop(e, y, x)}
            className={`
              w-10
              h-10
              rounded-lg
              transition-all
              ${
                cell
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50'
                  : 'bg-slate-800'
              }
            `}
          />
        ))
      )}
    </div>
  )
}import { useGameStore } from '../store/gameStore'

export default function Board({ board }) {
  const place = useGameStore(state => state.place)

  function handleDrop(e, row, col) {
    const shapeIndex = Number(
      e.dataTransfer.getData('shapeIndex')
    )

    place(shapeIndex, row, col)
  }

  return (
    <div className="grid grid-cols-8 gap-1 bg-slate-900 p-3 rounded-2xl">
      {board.map((row, y) =>
        row.map((cell, x) => (
          <div
            key={`${y}-${x}`}
            onDragOver={e => e.preventDefault()}
            onDrop={e => handleDrop(e, y, x)}
            className={`
              w-10
              h-10
              rounded-lg
              transition-all
              ${
                cell
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50'
                  : 'bg-slate-800'
              }
            `}
          />
        ))
      )}
    </div>
  )
}
