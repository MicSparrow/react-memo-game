import Card from "./Card";

const Display = (props) => {
  return (
    <ul className="flex">
      {props.items.map((data) => (
        <Card
          key={data.id}
          image={data.image}
          name={data.name}
          id={data.id}
          onClick={props.onClick}
        />
      ))}
    </ul>
  );
};

export default Display;
