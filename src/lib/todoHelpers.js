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
