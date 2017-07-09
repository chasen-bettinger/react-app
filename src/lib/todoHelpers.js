export const addTodo = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random()*100000);

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodos = (list, update) => {
  const updatedIndex = list.findIndex(item => item.id === update.id);
  return [
    ...list.slice(0, updatedIndex),
    update,
    ...list.slice(updatedIndex+1)
  ]
}

export const removeTodo = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id);
  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex+1)
  ]
}

export const filterTodos = (list, route) => {
  switch(route) {
    case '/active':
      return list.filter(item => !item.isComplete)
      // eslint-disable-next-line
      break;
    case '/complete':
      return list.filter(item => item.isComplete)
      // eslint-disable-next-line
      break;
    default:
      return list
  }
}
