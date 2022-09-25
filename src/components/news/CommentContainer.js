import React from 'react';

export default function CommentContainer() {
  return (
    <div className="text-justify darker mt-4 float-right">
      <img
        src="https://i.imgur.com/CFpa3nK.jpg"
        alt=""
        className="rounded-circle"
        width="40"
        height="40"
      />

      <h4 className="h4">Rob Simpson</h4>
      <span>- 20 October, 2018</span>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        numquam assumenda hic aliquam vero sequi velit molestias doloremque
        molestiae dicta?
      </p>
    </div>
  );
}
