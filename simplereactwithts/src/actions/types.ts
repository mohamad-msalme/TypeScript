import { FetchTodosAction, DeleteTodoAction } from ".";

export enum ActionType {
  fetchTodos,
  deleteTodo
}
export type Action = FetchTodosAction | DeleteTodoAction;