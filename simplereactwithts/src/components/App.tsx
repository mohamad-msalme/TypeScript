import {connect} from "react-redux"
import React from "react";
import {Todo, fetchTodos, deleteTodo} from "../actions"
import {StoreState} from "../reducers"

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

export interface AppState {
  isLoading: Boolean;
}


class _App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {isLoading: false};
  }

  componentDidUpdate(prevProps: AppProps) {
    if(!prevProps.todos.length && this.props.todos.length) this.setState({isLoading: false})
  }

  onFetchCkick = () => {
    this.setState({isLoading: true});
    this.props.fetchTodos();
  }

  onDeleteTodo = (id: number) => {
    this.props.deleteTodo(id);
  }

  renderList() : JSX.Element[] {
    return this.props.todos.slice(0, 5).map((todo) => 
      <div onClick={this.onDeleteTodo.bind(this, todo.id)} key={todo.id} style={{margin: 10}}>
        Todo {todo.id}: {todo.title}
      </div>)     
  }

  renderText() : string {
    if(!this.state.isLoading && !this.props.todos.length)
      return "please, click on fetch to get todos";
    else if (this.state.isLoading && !this.props.todos.length)
      return "...Loading";
    else return ""
  }

  render() {
    return(
      <div>
        <button onClick = {this.onFetchCkick}>
          Fetch
        </button>
        <p>{this.renderText()}</p>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = ({todos} : StoreState): { todos: Todo[] } => {
  return { todos } 
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)