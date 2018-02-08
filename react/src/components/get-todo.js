import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTodo } from "../actions/index";
import axios from 'axios';

let reqs = [];

axios.get('http://127.0.0.1:8848/api/todos')
  .then(res => {
    console.log('the response',res);
    reqs = this.props.getTodo(res.data.data);
    // this.setState({
    //   items: res.data.data
    // });
  }).catch(err => err);

console.log(reqs);

let GetTodo = () => {
    return reqs;
    // return ("1");
}

let mapStatetoProps = (state) => {
  return { ...state }
}

let matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ getTodo }, dispatch)
}

export default connect(mapStatetoProps, matchDispatchToProps)(GetTodo);