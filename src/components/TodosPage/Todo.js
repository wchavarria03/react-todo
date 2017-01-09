import React from 'react';
import TodoBox from './TodoBox/TodoBox';
import TodoTitle from './TodoTitle/TodoTitle';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filteredTodos: []
    };
  }
  componentWillMount() {
    this.setState({filteredTodos: this.state.todos});
  }

  addTodo(val) {
    const todo = {id: this.state.todos.length, text: val, status: 'ACTIVE'};
    this.state.todos.push(todo);
    this.setState({todos: this.state.todos});
    //TODO: After add one change the filter to all
  }
  removeTodo(id) {
    const remainder = this.state.todos.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    this.state.todos = remainder;
    //TODO: Improve this state management
    this.setState({todos: remainder});
    this.setState({filteredTodos: remainder});

  }
  toggleTodo(id) {
    let todoToggle = this.state.todos.find((todo) => {
      return todo.id === id;
    });
    todoToggle.status = todoToggle.status === 'ACTIVE' ? 'COMPLETED' : 'ACTIVE';
    this.setState({todos: this.state.todos});
    this.setState({filteredTodos: this.state.todos});
  }
  filterBy(filterCriteria) {
    let filteredTodos = this.state.todos;
    if (filterCriteria === 'COMPLETED') {
      filteredTodos = this.state.todos.filter((todo) => {
        if(todo.status === 'COMPLETED') return todo;
      });
    } else if (filterCriteria === 'ACTIVE') {
      filteredTodos = this.state.todos.filter((todo) => {
        if(todo.status === 'ACTIVE') return todo;
      });
    } else {
      filteredTodos = this.state.todos;
    }
    this.setState({filteredTodos : filteredTodos});
  }

  render() {
    //TODO: Move the hard code strings to constants
    let filters = [
      {
        text: "All",
        filterCriteria: 'ALL'
      },
      {
        text: "Active",
        filterCriteria: 'ACTIVE'
      },
      {
        text: "Completed",
        filterCriteria: 'COMPLETED'
      }
    ];
    return (
      <div>
        <TodoTitle title={'Todo List'}/>
        <TodoBox
          itemsLength={this.state.filteredTodos.length}
          filters={filters}
          todos={this.state.filteredTodos}
          add={this.addTodo.bind(this)}
          remove={this.removeTodo.bind(this)}
          toggle={this.toggleTodo.bind(this)}
          filterAction={this.filterBy.bind(this)}
        />
      </div>
    );
  }
}

export default Todo;