import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { postTodo } from "../actions/index";
import axiosBase from './axios-base';

let postData = () => {
  // let itemArray = this.props.todoList.items;
  let destinationUrl = axiosBase + '/todos';
    if (this.props.todoList.newTodo !== "") {
      axios.post(destinationUrl, {
        name: this.props.todoList.newTodo,
        userId: 1,
        tags: this.props.todoList.tagIds
    }).then(res => {
      let reqData = [
        name= this.props.todoList.newTodo;
        userId= 1;
        id= res.data.todoData.id;
        tags= this.props.todoList.tagNames;
      ];

        this.props.postTodo(reqData);

      }).catch(err => err);
    }
  // }
//   else {
//       let itemToBeEdited = itemArray.filter((item) => {
//         return (item.id === this.props.todoList.editedItemid);
//       });
//       axios.put('http://127.0.0.1:8848/api/todos/' + itemToBeEdited[0].id, {
//         name: this.props.todoList.newTodo,
//         userId: 1,
//         tags: this.props.todoList.tagIds
//       }).then(res => {

//         // console.log(this.props.todoList.tags);

//         let filteredItem = itemArray.filter((item) => {
//           return (item.id !== this.props.todoList.editedItemid);
//         });

//         filteredItem.push({
//           name: this.props.todoList.newTodo,
//           userId: 1,
//           id: res.data.data.id,
//           tags: this.props.todoList.tagNames
//         });

//         console.log(filteredItem);

//         this.setprops.todoList({
//           items: filteredItem,
//           newTodo: "",
//           isEditable: 1
//         });
//       }).catch(err => err);
//     }
//   }
//   e.preventDefault();
}

let maptatetoProps = (state) => {
  return { ...state }
}

let matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ postTodo }, dispatch)
}

export default connect(mapstatetoProps, matchDispatchToProps)(TodoList);