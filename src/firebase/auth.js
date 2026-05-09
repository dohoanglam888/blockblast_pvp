import { signInAnonymously } from 'firebase/auth'
import { auth } from './config'

export async function loginGuest() {
  return await signInAnonymously(auth)
}