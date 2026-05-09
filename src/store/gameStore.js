import { create } from 'zustand'

import {
  createBoard,
  canPlace,
  placeShape,
} from '../game/board'

import { SHAPES } from '../game/shapes'

function randomShape() {
  return SHAPES[
    Math.floor(Math.random() * SHAPES.length)
  ]
}

export const useGameStore = create((set, get) => ({
  board: createBoard(),

  score: 0,

  gameOver: false,

  shapes: [
    randomShape(),
    randomShape(),
    randomShape(),
  ],

  place: (shapeIndex, row, col) => {
    const state = get()

    const shape = state.shapes[shapeIndex]

    if (!canPlace(state.board, shape, row, col)) {
      return
    }

    const board = placeShape(
      state.board,
      shape,
      row,
      col
    )

    const shapes = [...state.shapes]

    shapes[shapeIndex] = randomShape()

    set({
      board,
      shapes,
      score: state.score + 100,
    })
  },
}))
