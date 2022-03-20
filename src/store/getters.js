
export default {
  /**
   * Obtiene las lista de los tableros
   * @param {*} state
   * @returns
   */
  getListsByBoard: (state) => (boardId) => {
    return Object.values(state.lists).filter(list => list.board === boardId)
  },
  /**
   * Obtiene las tareas de las listas
   * @param {*} state
   * @returns
   */
  getTasksFromList: (state) => (listId) => {
    return Object.values(state.tasks).filter(task => task.list === listId)
  }
}
