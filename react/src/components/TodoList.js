import React, { Component } from "react";
import TodoItems from "./TodoItems";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as allActions from "../actions/index";
import axios from 'axios';
import "../styles/TodoList.css";

class TodoList extends Component{
  constructor() {
    super();

    this.postData = this.postData.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.tags = this.tags.bind(this);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8848/api/todos')
      .then(res => {
        this.props.getTodo(res.data.data);
      }).catch(err => err);
  }

  postData(e) {
    let itemArray = this.props.todoList.items;
    if (this.props.todoList.isEditable === 1) {
      if (this.props.todoList.newTodo !== "") {
        axios.post('http://127.0.0.1:8848/api/todos', {
          name: this.props.todoList.newTodo,
          userId: 1,
          tags: this.props.todoList.tagIds
        }).then(res => {
          // console.log('res', res);
          let reqData = [{
          id : res.data.todoData.id,
          name : this.props.todoList.newTodo,
          done: false,
          userId : 1,
          tags : this.props.todoList.tagNames
          }];

          this.props.postTodo(reqData);
        }).catch(err => err);
      }
    }
    else {
      if (this.props.todoList.newTodo !== "") {
        let itemToBeEdited = itemArray.filter((item) => {
          return (item.id === this.props.todoList.editedItemid);
        });
        axios.put('http://127.0.0.1:8848/api/todos/' + itemToBeEdited[0].id, {
          name: this.props.todoList.newTodo,
          userId: 1,
          tags: this.props.todoList.tagIds
        }).then(res => {
          let filteredItem = itemArray.filter((item) => {
            return (item.id !== this.props.todoList.editedItemid);
          });

          let editedData = [{
            id: res.data.data.id,
            name: this.props.todoList.newTodo,
            userId: 1,
            tags: this.props.todoList.tagNames
          }];

          this.props.postTodo(editedData);
        }).catch(err => err);
      }
    }
    e.preventDefault();
  }

  deleteItem(id) {
    if (this.props.todoList.isEditable === 1) {
      let itemToBeDeleted = this.props.todoList.items.filter((item) => {
        return (item.id === id);
      });
      axios.delete('http://127.0.0.1:8848/api/todos/' + itemToBeDeleted[0].id)
        .then(res => {
          this.props.deleteTodo(id);
        }).catch(err => err);
    }
  }

  editItem(id) {
    let toBeEditedItem = this.props.todoList.items.filter((item) => {
      return (item.id === id);
    });

    this.props.editTodo(0);
  }

  tags(e) {
    if (e.target.checked === true) {
      if (e.target.value === "1") {
        this.props.todoList.tagIds.push(1);
        this.props.todoList.tagNames.push({ tagName: "call" });
      }
      else if (e.target.value === "2") {
        this.props.todoList.tagIds.push(2);
        this.props.todoList.tagNames.push({ tagName: "clean" });
      }
      else if (e.target.value === "3") {
        this.props.todoList.tagIds.push(3);
        this.props.todoList.tagNames.push({ tagName: "grocery" });
      }
      else if (e.target.value === "4") {
        this.props.todoList.tagIds.push(4);
        this.props.todoList.tagNames.push({ tagName: "meeting" });
      }
      else if (e.target.value === "5") {
        this.props.todoList.tagIds.push(5);
        this.props.todoList.tagNames.push({ tagName: "shows" });
      }
      else if (e.target.value === "6") {
        this.props.todoList.tagIds.push(6);
        this.props.todoList.tagNames.push({ tagName: "sports" });
      }
      else {
        this.props.todoList.tagIds.push(7);
        this.props.todoList.tagNames.push({ tagName: "work" });
      }
    }
    else {
      if (e.target.value === "1") {
        this.props.todoList.tagIds.splice(this.props.todoList.tagIds.indexOf(1), 1);
        this.props.todoList.tagNames.splice(this.props.todoList.tagNames.indexOf("call"), 1);
      }
      else if (e.target.value === "2") {
        this.props.todoList.tagIds.splice(this.props.todoList.tagIds.indexOf(2), 1);
        this.props.todoList.tagNames.splice(this.props.todoList.tagNames.indexOf("clean"), 1);
      }
      else if (e.target.value === "3") {
        this.props.todoList.tagIds.splice(this.props.todoList.tagIds.indexOf(3), 1);
        this.props.todoList.tagNames.splice(this.props.todoList.tagNames.indexOf("grocery"), 1);
      }
      else if (e.target.value === "4") {
        this.props.todoList.tagIds.splice(this.props.todoList.tagIds.indexOf(4), 1);
        this.props.todoList.tagNames.splice(this.props.todoList.tagNames.indexOf("meeting"), 1);
      }
      else if (e.target.value === "5") {
        this.props.todoList.tagIds.splice(this.props.todoList.tagIds.indexOf(5), 1);
        this.props.todoList.tagNames.splice(this.props.todoList.tagNames.indexOf("shows"), 1);
      }
      else if (e.target.value === "6") {
        this.props.todoList.tagIds.splice(this.props.todoList.tagIds.indexOf(6), 1);
        this.props.todoList.tagNames.splice(this.props.todoList.tagNames.indexOf("sports"), 1);
      }
      else {
        this.props.todoList.tagIds.splice(this.props.todoList.tagIds.indexOf(7), 1);
        this.props.todoList.tagNames.splice(this.props.todoList.tagNames.indexOf("work"), 1);
      }
    }
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.postData}>
            <input className="todos" value={this.props.todoList.newTodo} onChange={(e) => this.props.handleChange(e.target.value)} placeholder="Enter Todo" />
            <button type="submit" onClick={this.postData}>{(this.props.todoList.isEditable === 1) ? "Add" : "Edit"}</button>
            <div>
              <input type="checkbox" value="1" onClick={this.tags} />call
              <input type="checkbox" value="2" onClick={this.tags} />clean
              <input type="checkbox" value="3" onClick={this.tags} />grocery
              <input type="checkbox" value="4" onClick={this.tags} />meeting
              <input type="checkbox" value="5" onClick={this.tags} />shows
              <input type="checkbox" value="6" onClick={this.tags} />sports
              <input type="checkbox" value="7" onClick={this.tags} />work
            </div>
          </form>
        </div>
        <TodoItems items={this.props.todoList.items} delete={this.deleteItem} edit={this.editItem} />
        {/* <GetTodo /> */}
      </div>
    )
  }
}


let mapStatetoProps = (state) => {
  return { ...state }
}

let matchDispatchToProps = (dispatch) => {
  return bindActionCreators(allActions, dispatch)
}

export default connect(mapStatetoProps, matchDispatchToProps)(TodoList);