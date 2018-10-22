import Dexie from 'dexie'
import 'dexie-observable'
const Singleton = (function () {
    let instance
    const createDB = function () {
        const db = new Dexie('ObservableTest')
        db.version(1).stores({
            users: '$$id name',
            products: '$$id,name'
        })
        db.on('changes', function (changes) {
            console.log('Changes ===>', changes)
            changes.forEach(change => console.log(change.obj))
        })
        return db
    }
    return {
        getInstance: function () {

            if (!instance) {
                instance = createDB()
                return instance
            }
            return instance
        },
        createDB
    }
})()

export const getDB = () => Singleton.getInstance()
export const reloadDB = () => Singleton.createDB()