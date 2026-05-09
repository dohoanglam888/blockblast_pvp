export function createBoard() {
  return Array(8)
    .fill(null)
    .map(() => Array(8).fill(0))
}

export function canPlace(board, shape, row, col) {
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[y].length; x++) {
      if (!shape[y][x]) continue

      const newRow = row + y
      const newCol = col + x

      if (
        newRow >= 8 ||
        newCol >= 8 ||
        board[newRow][newCol]
      ) {
        return false
      }
    }
  }

  return true
}

export function placeShape(board, shape, row, col) {
  const newBoard = board.map(r => [...r])

  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        newBoard[row + y][col + x] = 1
      }
    }
  }

  return clearLines(newBoard)
}

export function clearLines(board) {
  const newBoard = board.map(r => [...r])

  for (let y = 0; y < 8; y++) {
    if (newBoard[y].every(cell => cell === 1)) {
      for (let x = 0; x < 8; x++) {
        newBoard[y][x] = 0
      }
    }
  }

  for (let x = 0; x < 8; x++) {
    let full = true

    for (let y = 0; y < 8; y++) {
      if (!newBoard[y][x]) {
        full = false
      }
    }

    if (full) {
      for (let y = 0; y < 8; y++) {
        newBoard[y][x] = 0
      }
    }
  }

  return newBoard
}
