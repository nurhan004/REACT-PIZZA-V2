import "./PizzaCard.css"


function PizzaCard({ pizza }) {
  return (
    <div className="pizza-card">
      <img src={pizza.imageUrl} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <b>{pizza.price} сом</b>
    </div>
  );
}

export default PizzaCard;
