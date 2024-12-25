import "./Card.css";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi2";
import { TiDeleteOutline } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { GoXCircle } from "react-icons/go";
import { CiCirclePlus } from "react-icons/ci";

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


  const total = cartData.reduce((a,b) => {
      return a + parseInt(b.price)
  },0)
  


  const clearCart = () => {
    setCartData([]);
    localStorage.removeItem("cart");
  };

  return (
      <div className="cartcard"> 
          <div style={{display:'flex', paddingTop:'30px',marginLeft:'100px',gap:'20px'}}>
            <img src="https://my-react-pizza-v2.netlify.app/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg" alt="" style={{width:'40px'}} />
        <div>
          <Link to="/" >
            <h4 className="v2" >Okurmen Pizza v2</h4>
            <p className="very" >самая вкусная пицца во вселенной</p>
          </Link>
        </div>
        </div>
        <div style={{width:'1200px', height:'1px',backgroundColor:'grey',marginTop:'30px'}}></div>
      <div className="cart">
        <h1 className="cartt">
          <span><BsCart2 /></span>Корзина</h1>
        <div className="trash" onClick={clearCart}>
          <span><HiOutlineTrash /></span>Очистить корзину
        </div>
      </div>
   

      {cartData.length === 0 ? (
        <div className="flex">
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
                <CiCircleMinus />
                </span>
                <h1 className="quantity1">1</h1>
                <h1>{item.quantity}</h1>
                <span className="add">
                <CiCirclePlus />
                </span>
                <h1 style={{ marginLeft: "50px" }}>{item.price} </h1>
                <span className="back" ><GoXCircle />
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
              Всего пицц: <span className="quantities">{cartData.length > 0 ?cartData.length:null  }шт.</span>
            </h2>
            <h2 className="sell">Сумма заказа: <span className="dani">{total}сом</span></h2>
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
        <div>

        </div>
          <button className="back1"><span className="arrow"><IoIosArrowBack /></span>Вернуться назад</button>
        </Link>
        {cartData.length > 0 && <button className="buy">Оплатить сейчас</button>}
      </div>
    </div>
  );
};

export default Cart;
