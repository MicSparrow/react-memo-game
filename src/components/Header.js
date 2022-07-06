import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <h2>REACT MEMO GAME</h2>
      <hr />
      <ul>
        <li>Current score: {props.score}</li>
        <li>Best score: {props.bestScore}</li>
      </ul>
      <hr />
    </div>
  );
};

export default Header;
