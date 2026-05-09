import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore'

import { firestore } from '../firebase/config'

export async function findMatch(playerId) {
  const q = query(
    collection(firestore, 'rooms'),
    where('status', '==', 'waiting')
  )

  const snapshot = await getDocs(q)

  if (!snapshot.empty) {
    const room = snapshot.docs[0]

    await updateDoc(doc(firestore, 'rooms', room.id), {
      player2: playerId,
      status: 'playing',
    })

    return {
      roomId: room.id,
      isHost: false,
    }
  }

  const room = await addDoc(collection(firestore, 'rooms'), {
    player1: playerId,
    status: 'waiting',
    createdAt: Date.now(),
  })

  return {
    roomId: room.id,
    isHost: true,
  }
}