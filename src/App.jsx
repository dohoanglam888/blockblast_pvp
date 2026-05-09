import { useEffect, useState } from 'react'
import Board from './components/Board'
import ShapeTray from './components/ShapeTray'
import { loginGuest } from './firebase/auth'
import { createProfile } from './backend/createProfile'
import { findMatch } from './backend/findMatch'
import { useGameStore } from './store/gameStore'

export default function App() {
  const { board, score, shapes } = useGameStore()

  const [uid, setUid] = useState('')
  const [roomId, setRoomId] = useState('')

  useEffect(() => {
    async function boot() {
      const result = await loginGuest()
      const user = result.user

      setUid(user.uid)

      await createProfile(user)

      const match = await findMatch(user.uid)

      setRoomId(match.roomId)
    }

    boot()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 p-4">
      <h1 className="text-5xl font-bold">
        BlockBlast PvP
      </h1>

      <div className="text-xl">
        Score: {score}
      </div>

      <Board board={board} />

      <ShapeTray shapes={shapes} />

      <div className="text-sm text-slate-400">
        UID: {uid}
      </div>

      <div className="text-sm text-cyan-400">
        Room: {roomId}
      </div>
    </div>
  )
}