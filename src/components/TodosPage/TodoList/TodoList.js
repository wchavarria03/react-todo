import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class TodoList extends React.Component {
  render () {
    return (
      <Grid>
        {this.props.todoList.map(function(data) {
          return (
            <Row className="show-grid" key={data.key}>
              <Col xs={12} md={8} lg={6} className="text-center">
                <TodoListItem todo={data.description}/>
              </Col>
            </Row>
          );
        })}
      </Grid>
    );
  }
}

TodoList.propTypes = {
  todoList: React.PropTypes.array
};

export default TodoList;