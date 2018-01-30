import React, { Component } from "react";

class TodoItems extends Component {
  constructor() {
    super();

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item,index) {
    return (
      <li key={index}>
      {item.name}
      <button onClick={() => this.delete(item.id)}>Delete</button>
      <button onClick={() => this.edit(item.id)}>Edit</button>
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
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
};

export default TodoItems;