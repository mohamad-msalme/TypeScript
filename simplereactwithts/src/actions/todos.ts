import axios from "axios";
import {Dispatch} from 'redux';
import { ActionType } from ".";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionType.fetchTodos;
  payload: Todo[]
}

export interface DeleteTodoAction {
  type: ActionType.deleteTodo;
  payload: number;
}

const URL = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<Todo[]>(URL);
    dispatch<FetchTodosAction>({
      type: ActionType.fetchTodos,
      payload: response.data
    })
  } catch (error) {
    console.error(error);
  }
}

export const deleteTodo = (id: number) : DeleteTodoAction => {
  return {
    type: ActionType.deleteTodo,
    payload: id
  }
}