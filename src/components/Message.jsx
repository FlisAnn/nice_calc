import React from "react";

const Message = props => {
  return (
    <p id='bmi-message'>
      {props.bmiMessage} and you should give yourself {props.bmiValue} hugs
    </p>
  );
};

export default Message;