import {
  ref,
  set,
  onValue,
} from 'firebase/database'

import { realtimeDb } from '../firebase/config'

export async function syncState(roomId, playerId, state) {
  await set(
    ref(realtimeDb, `live/${roomId}/${playerId}`),
    state
  )
}

export function subscribeEnemy(roomId, enemyId, callback) {
  return onValue(
    ref(realtimeDb, `live/${roomId}/${enemyId}`),
    snapshot => {
      callback(snapshot.val())
    }
  )
}