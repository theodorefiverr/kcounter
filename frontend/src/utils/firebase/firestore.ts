import type { DocumentChange, DocumentData, DocumentSnapshot, Firestore, QuerySnapshot, Unsubscribe } from '@firebase/firestore'
import { collection, doc, getDoc, getDocs, getFirestore, limit, onSnapshot, orderBy, query } from 'firebase/firestore'
import { app } from '.'
const db = getFirestore(app)

class FirestoreService {
  db: Firestore
  constructor() {
    this.db = db
  }

  getDataList() {
    return new Promise((resolve: (value: QuerySnapshot<DocumentData>) => void, reject: (reason: any | (void | PromiseLike<void>) | null | undefined) => void) => {
      const colRef = collection(db, 'Data')
      getDocs(colRef).then(resolve).catch(reject)
    })
  }

  getDataListQ() {
    return new Promise((resolve: (value: QuerySnapshot<DocumentData>) => void, reject: (reason: any | (void | PromiseLike<void>) | null | undefined) => void) => {
      const colRef = collection(db, 'Data')
      const q = query(colRef, limit(1), orderBy('readable_time', 'desc'))
      getDocs(q).then(resolve).catch(reject)
    })
  }

  streamDataListQ(action: { unsubscribe?: (value: Unsubscribe) => void; error?: (value: any) => void; snapshot?: (value: QuerySnapshot<DocumentData>) => void }) {
    const colRef = collection(db, 'Data')
    const q = query(colRef, limit(1), orderBy('readable_time', 'desc'))
    try {
      onSnapshot(q, (snapshot) => {
        action!.snapshot!(snapshot)
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added')
            console.log('New city: ', change.doc.data())

          if (change.type === 'modified')
            console.log('Modified city: ', change.doc.data())

          if (change.type === 'removed')
            console.log('Removed city: ', change.doc.data())
        })
      })
      // action!.unsubscribe!(unsubscribe)
    }
    catch (error) {
      action!.error!(error)
    }
  }

  getData(path:string) {
    return new Promise((resolve: (value: DocumentSnapshot<DocumentData>) => void, reject) => {
      const docRef = doc(db, path) // 'coll/id'
      getDoc(docRef).then(resolve).catch(reject)
    })
  }

  streamData(path:string, action: { unsubscribe?: (value: Unsubscribe) => void; error?: (value: any) => void; snapshot?: (value: DocumentSnapshot<DocumentData>) => void }) {
    const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
      console.log("Current data: ", doc.data());
  });
    try {
      const unsub =   onSnapshot(doc(db,path), (snapshot) => {
        action!.snapshot!(snapshot)
      })
      action!.unsubscribe!(unsub)
    }
    catch (error) {
      action!.error!(error)
    }
  }
}

export const fbService = new FirestoreService()
