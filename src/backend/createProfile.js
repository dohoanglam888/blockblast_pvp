import {
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'

import { firestore } from '../firebase/config'

export async function createProfile(user) {
  const ref = doc(firestore, 'users', user.uid)

  const snapshot = await getDoc(ref)

  if (!snapshot.exists()) {
    await setDoc(ref, {
      username: `Guest_${user.uid.slice(0, 6)}`,
      elo: 1000,
      wins: 0,
      losses: 0,
      createdAt: Date.now(),
    })
  }
}