import "./Card.css";

const Card = (props) => {
  return (
    <div className="display">
      <img
        src={props.image}
        alt={props.name}
        key={props.id}
        data-id={props.id}
        onClick={props.onClick}
      />
      <p>{props.name}</p>
    </div>
  );
};

export default Card;
