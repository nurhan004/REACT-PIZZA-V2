import "./Card.css";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi2";
import { LuCircleMinus } from "react-icons/lu";
import { RiAddCircleLine } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import { useContext } from "react";
import { APPCONTEXT } from "../../context/AppContext";
import { Link } from "react-router";
import Header from "../../components/header/Header";

const Cart = () => {
  const { cartData, setCartData } = useContext(APPCONTEXT);

 
  const removeItem = (id) => {
    const updatedCart = cartData.filter((item) => item.id !== id);
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  const clearCart = () => {
    setCartData([]);
    localStorage.removeItem("cart");
  };

  return (
      <div className="cartcard"> 
          <div style={{display:'flex', paddingTop:'30px',marginLeft:'100px'}}>
            <img src="https://my-react-pizza-v2.netlify.app/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg" alt="" style={{width:'40px'}} />
        <div>
            <h4 style={{fontSize:'30px',fontWeight:'700'}} >Okurmen Pizza</h4>
            <p >самая вкусная пицца во вселенной</p>
        </div>
        </div>
      <div className="cart">
        <h1 className="cartt">
          <span><BsCart2 /></span>Корзина</h1>
        <div className="trash" onClick={clearCart}>
          <span><HiOutlineTrash /></span>Очистить корзину
        </div>
      </div>
   

      {cartData.length === 0 ? (
        <div style={{textAlign:'center'}}>
            <h1 className="pust">Корзина пустая 😕</h1>
            <h2 className="yet">Вероятней всего, вы не заказывали ещё пиццу.
Для того, чтобы заказать пиццу, перейди на главную страницу.</h2>
<img src="https://my-react-pizza-v2.netlify.app/static/media/empty-cart.db905d1f4b063162f25b.png" alt="" className="cartWoman"/>
        </div>
      ) : (
        <>
          {cartData.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} className="pizzaImg" alt={item.name} />
              <div>
                <h2 className="chees">{item.name}</h2>
                <h3 className="han">{item.description}</h3>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <span className="minuse">
                  <LuCircleMinus />
                </span>
                <h1>{item.quantity}</h1>
                <span className="add">
                  <RiAddCircleLine />
                </span>
                <h1 style={{ marginLeft: "50px" }}>{item.price} </h1>
                <span className="back" onClick={() => removeItem(item.id)}>
                  <TiDeleteOutline />
                </span>
              </div>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              gap: "320px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <h2 className="nur">
              Всего пицц:{" "}
              <span className="cht">
                {cartData.reduce((total, item) => total + item.quantity, 0)} шт.
              </span>
            </h2>
            <h2 className="sell">
              Сумма заказа:{""}
              <span style={{ color: "rgb(255, 132, 0)", fontWeight: "600" }}>
                {cartData.reduce((total, item) => total + item.price * item.quantity, 0)} ₽
              </span>
            </h2>
          </div>
        </>
      )}

      <div
        style={{
          display: "flex",
          gap: "550px",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Link to="/">
          <button className="back1">
            <span className="arrow">
              <IoIosArrowBack />
            </span>
            Вернуться назад
          </button>
        </Link>
        {cartData.length > 0 && <button className="buy">Оплатить сейчас</button>}
      </div>
    </div>
  );
};

export default Cart;
