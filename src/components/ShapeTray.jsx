export default function ShapeTray({ shapes }) {
  return (
    <div className="flex gap-4 mt-4">
      {shapes.map((shape, idx) => (
        <div
          key={idx}
          draggable
          onDragStart={e => {
            e.dataTransfer.setData(
              'shapeIndex',
              idx
            )
          }}
          className="bg-slate-900 p-3 rounded-xl cursor-grab active:scale-95"
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
