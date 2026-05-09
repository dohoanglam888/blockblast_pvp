export function createBoard() {
  return Array(8)
    .fill(null)
    .map(() => Array(8).fill(0))
}

export function canPlace(board, shape, row, col) {
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[y].length; x++) {
      if (!shape[y][x]) continue

      const r = row + y
      const c = col + x

      if (
        r >= 8 ||
        c >= 8 ||
        board[r][c]
      ) {
        return false
      }
    }
  }

  return true
}

export function placeShape(
  board,
  shape,
  row,
  col
) {
  const newBoard = board.map(r => [...r])

  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        newBoard[row + y][col + x] = 1
      }
    }
  }

  return newBoard
}
