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

<div>
              <input type="checkbox" value="1" onClick={this.tags} />call
              <input type="checkbox" value="2" onClick={this.tags} />clean
              <input type="checkbox" value="3" onClick={this.tags} />grocery
              <input type="checkbox" value="4" onClick={this.tags} />meeting
              <input type="checkbox" value="5" onClick={this.tags} />shows
              <input type="checkbox" value="6" onClick={this.tags} />sports
              <input type="checkbox" value="7" onClick={this.tags} />work
            </div>