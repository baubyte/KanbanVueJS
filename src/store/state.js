export default {
  user: null,
  /**
   *cuando se encuentre cargando
   */
  fetchingData: true,
  error: null,

  boards: {/*
      id: {
        id,
        owner,
        name
      }
    */},
  lists: {/*
      id: {
        id,
        board,
        name
      }
    */},
  tasks: {/*
      id: {
        id,
        list,
        title,
        completed
      }
    */}
}
