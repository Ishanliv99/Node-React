import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
import axios from 'axios';

class TodoList extends Component{
  constructor() {
    super();
    this.state = {
      items: [],
      newTodo: "",
      editedItemid: 0,
      isEditable: 1
    };

    this.postData = this.postData.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ newTodo: e.target.value});
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8848/api/todos').then(res => {
      this.setState({
        items: res.data.data
      });
    }).catch(err => err);
  }

  postData(e) {
    let itemArray = this.state.items;
    if (this.state.isEditable === 1) {
      if (this.state.newTodo !== "") {
        axios.post('http://127.0.0.1:8848/api/todos',{
          name : this.state.newTodo,
          // done : 'yes',
          userId: 1
        }).then(res => {

          itemArray.unshift({
            name: this.state.newTodo,
            userId: 1,
            id: res.data.todoData.id
          });

          this.setState({
            items: itemArray,
            newTodo: ""
          });
        }).catch(err => err);
      }
    }
    else {
      if (this.state.newTodo !== "") {
        let itemToBeEdited = itemArray.filter( (item) => {
          return (item.id === this.state.editedItemid);
        });
        axios.put('http://127.0.0.1:8848/api/todos/'+itemToBeEdited[0].id, {
          name: this.state.newTodo,
          userId: 1
        }).then(res => {
          let filteredItem = itemArray.filter((item) => {
            return (item.id !== this.state.editedItemid);
          });

          filteredItem.unshift({
            name: this.state.newTodo,
            userId: 1,
            id: res.data.data.id
          });

          this.setState({
            items: filteredItem,
            newTodo: "",
            isEditable: 1
          });
        }).catch(err => err);
      }
    }
    e.preventDefault();
  }

  deleteItem(id) {
    let itemToBeDeleted = this.state.items.filter( (item) => {
        return (item.id === id);
    });
    axios.delete('http://127.0.0.1:8848/api/todos/'+itemToBeDeleted[0].id)
    .then(res => {
    let itemArray = this.state.items.filter( (item) => {
      return (item.id !== id);
    });

      this.setState({
        items: itemArray
      });
    }).catch(err => err);
  }

  editItem(id){
    let toBeEditedItem = this.state.items.filter((item) => {
      return (item.id === id);
    });

    this.setState({
      newTodo: toBeEditedItem[0].name,
      editedItemid: id,
      isEditable: 0
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.postData}>
            <input value={this.state.newTodo} onChange={this.handleChange} placeholder="Enter Todo"/>
            <button type="submit" onClick={this.postData}>{(this.state.isEditable===1)?"Add":"Edit"}</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} edit={this.editItem}/>
      </div>
    )
  }
}

export default TodoList;