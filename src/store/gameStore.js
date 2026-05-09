import { create } from 'zustand'
import { createBoard } from '../game/board'
import { SHAPES } from '../game/shapes'

function randomShape() {
  return SHAPES[Math.floor(Math.random() * SHAPES.length)]
}

export const useGameStore = create(set => ({
  board: createBoard(),
  score: 0,

  shapes: [
    randomShape(),
    randomShape(),
    randomShape(),
  ],

  setBoard: board => set({ board }),

  addScore: value =>
    set(state => ({
      score: state.score + value,
    })),
}))