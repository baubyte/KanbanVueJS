import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'

import settings from './settings'

const firebaseApp = firebase.initializeApp(settings)

export const auth = firebaseApp.auth()
export const db = firebaseApp.database()
export const PROVIDER = new firebase.auth.GoogleAuthProvider()

export default firebaseApp
