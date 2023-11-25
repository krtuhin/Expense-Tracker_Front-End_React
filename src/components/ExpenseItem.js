// import sub component's css
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

  //declare variable in component
  //   let title = "Car Insurence";

  return (
    <div className="expense-item">
      
      {/* using expense date sub component */}
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        {/* using JS data into JSX */}
        <h2>{props.title}</h2>

        <div className="expense-item__price">$ {props.price}</div>
      </div>
    </div>
  );
}

// export sub component
export default ExpenseItem;
