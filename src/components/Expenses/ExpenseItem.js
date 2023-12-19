// import react and react hook (use state)
import React, { useState } from "react";

// import sub component's css
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  /* destructuring the array with two variable one denoting the value that is 
  passed and another is the method to change the passed value */
  // const [title, setTitle] = useState(props.title);

  // useState for handle input field
  // const [newTitle, setNewTitle] = useState("");

  // onchange handler method
  // const changeHandler = (event) => {
  //   setNewTitle(event.target.value);
  // };

  // creating function clickhandler
  // let clickHandler = () => {
  //   setTitle(newTitle);
  // };

  return (
    // using component as a parent tag
    <Card className="expense-item">
      {/* using expense date sub component */}
      <ExpenseDate date={new Date(props.date)} />

      <div className="expense-item__description">
        {/* using JS data into JSX */}
        <h2>{props.title}</h2>

        <div className="expense-item__price">$ {props.price}</div>
      </div>

      {/* input field for changing title */}
      {/* <input type="text" value={newTitle} onChange={changeHandler}></input> */}

      {/* using click event (use function in the click event without '()') */}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

// export sub component
export default ExpenseItem;
