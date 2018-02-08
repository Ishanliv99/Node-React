import React, { Component } from "react";
import TodoItems from "./TodoItems";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {getTodo} from "../actions/index";
import axios from 'axios';
import "../styles/TodoList.css";

class TodoList extends Component{
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      tagIds: [],
      tagNames: [],
      newTodo: "",
      editedItemid: 0,
      isEditable: 1
    };

    this.postData = this.postData.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.tags = this.tags.bind(this);
  }

  handleChange(e) {
    this.setState({ newTodo: e.target.value});
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8848/api/todos')
    .then(res => {
      this.props.getTodo(res.data.data);
      console.log('DidMount',this.props.todoList.items);
    }).catch(err => err);
  }

  postData(e) {
    let itemArray = this.state.items;
    if (this.state.isEditable === 1) {
      if (this.state.newTodo !== "") {
        axios.post('http://127.0.0.1:8848/api/todos',{
          name : this.state.newTodo,
          userId: 1,
          tags: this.state.tagIds
        }).then(res => {
          console.log(this.state.tags);
          itemArray.push({
            name: this.state.newTodo,
            userId: 1,
            id: res.data.todoData.id,
            tags: this.state.tagNames
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
          userId: 1,
          tags: this.state.tagIds
        }).then(res => {

          // console.log(this.state.tags);

          let filteredItem = itemArray.filter((item) => {
            return (item.id !== this.state.editedItemid);
          });

          filteredItem.push({
            name: this.state.newTodo,
            userId: 1,
            id: res.data.data.id,
            tags: this.state.tagNames
          });

          console.log(filteredItem);

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
    if (this.state.isEditable === 1) {
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

  tags(e){
    // console.log(this.state.tags);
    if(e.target.checked === true){
      if (e.target.value === "1"){
        this.state.tagIds.push(1);
        this.state.tagNames.push({tagName: "call"});
      }
      else if (e.target.value === "2"){
        this.state.tagIds.push(2);
        this.state.tagNames.push({tagName: "clean"});
      }
      else if (e.target.value === "3"){
        this.state.tagIds.push(3);
        this.state.tagNames.push({tagName: "grocery"});
      }
      else if (e.target.value === "4"){
        this.state.tagIds.push(4);
        this.state.tagNames.push({tagName: "meeting"});
      }
      else if (e.target.value === "5"){
        this.state.tagIds.push(5);
        this.state.tagNames.push({tagName: "shows"});
      }
      else if (e.target.value === "6"){
        this.state.tagIds.push(6);
        this.state.tagNames.push({tagName: "sports"});
      }
      else{
        this.state.tagIds.push(7);
        this.state.tagNames.push({tagName: "work"});
      }
    }
    else {
      if (e.target.value === "1"){
        this.state.tagIds.splice(this.state.tagIds.indexOf(1),1);
        this.state.tagNames.splice(this.state.tagNames.indexOf("call"),1);
      }
      else if (e.target.value === "2"){
        this.state.tagIds.splice(this.state.tagIds.indexOf(2), 1);
        this.state.tagNames.splice(this.state.tagNames.indexOf("clean"),1);
      }
      else if (e.target.value === "3"){
        this.state.tagIds.splice(this.state.tagIds.indexOf(3), 1);
        this.state.tagNames.splice(this.state.tagNames.indexOf("grocery"),1);
      }
      else if (e.target.value === "4"){
        this.state.tagIds.splice(this.state.tagIds.indexOf(4), 1);
        this.state.tagNames.splice(this.state.tagNames.indexOf("meeting"),1);
      }
      else if (e.target.value === "5"){
        this.state.tagIds.splice(this.state.tagIds.indexOf(5), 1);
        this.state.tagNames.splice(this.state.tagNames.indexOf("shows"),1);
      }
      else if (e.target.value === "6"){
        this.state.tagIds.splice(this.state.tagIds.indexOf(6), 1);
        this.state.tagNames.splice(this.state.tagNames.indexOf("sports"),1);
      }
      else{
        this.state.tagIds.splice(this.state.tagIds.indexOf(7), 1);
        this.state.tagNames.splice(this.state.tagNames.indexOf("work"),1);
      }
    }
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.postData}>
            <input className="todos" value={this.state.newTodo} onChange={this.handleChange} placeholder="Enter Todo"/>
            <button type="submit" onClick={this.postData}>{(this.state.isEditable===1)?"Add":"Edit"}</button>
            <div>
              <input type="checkbox" value="1" onClick={this.tags}/>call
              <input type="checkbox" value="2" onClick={this.tags}/>clean
              <input type="checkbox" value="3" onClick={this.tags}/>grocery
              <input type="checkbox" value="4" onClick={this.tags}/>meeting
              <input type="checkbox" value="5" onClick={this.tags}/>shows
              <input type="checkbox" value="6" onClick={this.tags}/>sports
              <input type="checkbox" value="7" onClick={this.tags}/>work
            </div>
          </form>
        </div>
        <TodoItems items={this.props.todoList.items} delete={this.deleteItem} edit={this.editItem}/>
        {/* <GetTodo /> */}
      </div>
    )
  }
}


let mapStatetoProps = (initialState) => {
  return {...initialState}
}

let matchDispatchToProps = (dispatch) => {
  return bindActionCreators({getTodo}, dispatch)
}

export default connect(mapStatetoProps, matchDispatchToProps)(TodoList);