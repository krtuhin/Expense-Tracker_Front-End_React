// import sub component's css
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //declare variable in component
  //   let title = "Car Insurence";

  // modify props object data to use in JSX
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div className="expense-date">
        {/* used modified data */}
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>

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
