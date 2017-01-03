import React from 'react';
import TodoList from '../TodosPage/TodoList/TodoList';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.states= {
      todos : []
    };
    this._getTodos = this._getTodos.bind(this);
  }
  componentWillMount() {
    let todosLoaded = this._getTodos();
    this.setState({
      todos : todosLoaded
    });
  }
  _getTodos() {
    return [
      {description: 'first element description', key: 1},
      {description: 'second element description', key: 2},
      {description: 'third element description', key: 3},
      {description: 'fourth element description', key: 4},
      {description: 'fifth element description', key: 5},
      {description: 'sixth element description', key: 6}
    ];
  }
  render() {
    console.log(this.states.todos.length);
    return (
      <div>
        <h3> This is the Dashboard!!</h3>
        <TodoList todoList={this.state.todos}/>
      </div>
    );
  }
}


Dashboard.propTypes = {
  txt: React.PropTypes.string,
  car: React.PropTypes.string
};

Dashboard.defaultProps = {
  txt: 'default txt value'
};

export default Dashboard;