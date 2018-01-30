import React from "react";

const TagItem = (props) => {
  return (
    <li> {props.tagName} </li>
  );
}

const Tags =  (props) => {
  // console.log(props);
  return (
    <ul className="tag-list">
      {props.tags.map((item, index) => {
        return <TagItem tagName={item.tagName} key={index} />;
      })}
    </ul>
  )
}

export default Tags;