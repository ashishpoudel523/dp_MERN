import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div class="card">
        <img src="https://via.placeholder.com/300x200" alt="Card image" />
        <h2>{props.title}</h2>
        <p>
          This is a description of the card. It gives more details about the
          content of the card.
        </p>
        <button>Read More</button>
      </div>
    </>
  );
};

export default Card;
