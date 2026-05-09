export function createBoard() {
  return Array(8).fill(null).map(() => Array(8).fill(0))
}