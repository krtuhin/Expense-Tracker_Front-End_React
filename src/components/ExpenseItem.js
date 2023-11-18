// import sub component's css
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>August 12 2023</div>
      <div className="expense-item__description">
        <h2>Car Insurence</h2>
        <div className="expense-item__price">$ 400</div>
      </div>
    </div>
  );
}

// export sub component
export default ExpenseItem;
