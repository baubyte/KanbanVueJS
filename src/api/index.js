import { db } from './firebase'

/**
 * Referencias de la base de datos
 */
const boardsRef = db.ref('/boards')
const listsRef = db.ref('/lists')
const tasksRef = db.ref('/tasks')
export default {
/**
 * Paneles de un Usuario
 * @param {*} userId
 * @returns
 */
  getBoardsByUser (userId = 1) {
    const query = boardsRef.orderByChild('owner').equalTo(userId)
    return query.once('value')
  },
  /**
   * Crea un panel
   * @param {*} name
   * @param {*} owner
   * @returns
   */
  postBoard (name, owner = 1) {
    const id = boardsRef.push().key
    const board = { id, name, owner }
    return boardsRef.child(id).set(board).then(() => board)
  },
  /**
   * Todas las tareas de un panel
   * @param {*} boardId
   * @returns
   */
  getListsFromBoard (boardId) {
    const query = listsRef.orderByChild('board').equalTo(boardId)
    return query.once('value')
  },
  /**
   * Crea una lista a un panel
   * @param {*} board
   * @param {*} name
   * @returns
   */
  postList (board, name) {
    const id = listsRef.push().key
    const column = { id, name, board }
    return listsRef.child(id).set(column).then(() => column)
  },
  /**
   * Todas las tareas de una lista
   * @param {*} listId
   * @returns
   */
  getTasksFromList (listId) {
    const query = tasksRef.orderByChild('list').equalTo(listId)
    return query.once('value')
  },
  /**
   * Crea una tarea a una lista
   * @param {*} list
   * @param {*} title
   * @returns
   */
  postTask (list, title) {
    const id = tasksRef.push().key
    const task = { id, list, title, completed: false }
    return tasksRef.child(id).set(task).then(() => task)
  },
  /**
   * Borra una tarea
   * @param {*} taskId
   * @returns
   */
  deleteTask (taskId) {
    return tasksRef.child(taskId).remove()
  },
  /**
   * Maraca una tarea como completa
   * @param {*} taskId
   * @returns
   */
  completedTask (taskId) {
    const query = tasksRef.child(taskId).child('completed')
    return query.once('value').then(snap => snap.val()).then(data => query.set(!data))
  }
}
