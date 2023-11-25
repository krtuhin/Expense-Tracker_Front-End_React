// import css
import "./Card.css";

function Card(props) {
    
  // adding additional classes to the parent
  let classes = "card " + props.className;

  // using children property for get present the child component or elements
  return <div className={classes}>{props.children}</div>;
}

// export component
export default Card;
