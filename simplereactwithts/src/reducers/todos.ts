import {Todo, Action, ActionType} from "../actions"

export const todosReducer = (state: Todo[] = [], action: Action ): Todo[] => {

  switch(action.type) {
    case ActionType.fetchTodos: 
      return action.payload
    case ActionType.deleteTodo: 
      return state.filter((todo) => todo.id !== action.payload);
    default: 
      return state
  }
}