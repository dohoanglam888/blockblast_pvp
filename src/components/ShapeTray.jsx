export default function ShapeTray({ shapes }) {
  return (
    <div className="flex gap-4 mt-4">
      {shapes.map((shape, idx) => (
        <div
          key={idx}
          draggable={true}
          onDragStart={(e) => {
            e.dataTransfer.effectAllowed = 'move'

            e.dataTransfer.setData(
              'text/plain',
              idx.toString()
            )
          }}
          className="
            bg-slate-900
            p-3
            rounded-xl
            cursor-grab
            active:scale-95
            select-none
          "
        >
          {shape.map((row, y) => (
            <div key={y} className="flex gap-1">
              {row.map((cell, x) => (
                <div
                  key={x}
                  className={`
                    w-4
                    h-4
                    rounded-sm
                    ${
                      cell
                        ? 'bg-cyan-400'
                        : 'bg-transparent'
                    }
                  `}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
