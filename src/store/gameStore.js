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

  shapes: [
    randomShape(),
    randomShape(),
    randomShape(),
  ],

  place: (shapeIndex, row, col) => {
    const state = get()

    const shape = state.shapes[shapeIndex]

    if (!shape) return

    const valid = canPlace(
      state.board,
      shape,
      row,
      col
    )

    if (!valid) return

    const newBoard = placeShape(
      state.board,
      shape,
      row,
      col
    )

    const newShapes = [...state.shapes]

    newShapes[shapeIndex] = randomShape()

    set({
      board: newBoard,
      shapes: newShapes,
      score: state.score + 100,
    })
  },
}))
