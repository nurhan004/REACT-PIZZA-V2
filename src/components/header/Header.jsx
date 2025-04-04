import { useContext, useState } from "react";
import { APPCONTEXT } from "../../context/AppContext";
import { Link } from "react-router";
import { TfiSearch } from "react-icons/tfi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css"

const Header = ({ onSearch }) => {
  const { cartData } = useContext(APPCONTEXT);
  const [searchTerm, setSearchTerm] = useState("");

  const total = cartData.reduce((a, b) => a + parseInt(b.price), 0);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); 
  };

  return (
    <header>
      <div className="logo">
        <img
          src="https://my-react-pizza-v2.netlify.app/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg"
          alt=""
          style={{ width: "40px" }}
        />
        <div>
          <h4 className="oku">Okurmen Pizza v2</h4>
          <p className="whith">самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div className="search">
        <span style={{ marginTop: "7px", marginLeft: "15px", fontSize: "18px" }}>
          <TfiSearch />
        </span>
        <input
          type="text"
          placeholder="Поиск пиццы..."
          value={searchTerm}
          onChange={handleSearch} // Обновляем текст поиска
        />
      </div>
      <div className="cart-btn">
        <Link to="cart">
          <span>{total} ₽</span>&nbsp;&nbsp;|&nbsp;&nbsp;
          <span style={{ position: "relative", top: "2px" }}>
            <AiOutlineShoppingCart />
            {cartData.length > 0 ? cartData.length : null}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
