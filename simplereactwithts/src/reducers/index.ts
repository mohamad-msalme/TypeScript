import {combineReducers} from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";
export interface StoreState {
  todos: Todo[]
}
export const reducer = combineReducers<StoreState>({
  todos: todosReducer
})