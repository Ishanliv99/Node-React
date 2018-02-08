import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
  render(){
    return (
      <div>
        {/* <h2>Welcome</h2> */}
        <TodoList/>
      </div>
    )
  }
}

export default App;