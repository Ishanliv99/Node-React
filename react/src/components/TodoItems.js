import React, { Component } from "react";
import Tags from './Tags';

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item,index) {
    return (
      <li key={index}>
        {item.name}
        <button onClick={() => this.delete(item.id)}>Delete</button>
        <button onClick={() => this.edit(item.id)}>Edit</button>
        <Tags tags={item.tags} />
      </li>
    )
  }

  delete(id) {
    this.props.delete(id);
  }

  edit(id) {
    this.props.edit(id);
  }

  render() {
    let todoEntries = this.props.items;
    let listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
};

export default TodoItems;