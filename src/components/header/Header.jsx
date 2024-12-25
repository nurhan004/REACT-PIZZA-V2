import './Header.css'
import { TfiSearch } from "react-icons/tfi";
import { MdOutlineCurrencyRuble } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {useContext} from "react"
import {APPCONTEXT} from "../../context/AppContext"
import {Link} from 'react-router'


const Header = () => {
    
   
    const {cartData} = useContext(APPCONTEXT)
    console.log(cartData);

    const total = cartData.reduce((a,b) => {
        return a + parseInt(b.price)
    },0)
    
  return (
    <header>
        <div className='logo'>
            <img src="https://my-react-pizza-v2.netlify.app/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg" alt="" style={{width:'40px'}} />
        <div>
            <h4 className='text-[35px] font-[700]'>Okurmen Pizza</h4>
            <p className='text-[16px] font-[500] text-[grey]'>самая вкусная пицца во вселенной</p>
        </div>
        </div>
        <div  className='search'>
            <span style={{marginTop:'7px',marginLeft:'15px'}}><TfiSearch /></span>
            <input type="text"  placeholder='Поискт пиццы...' />
        </div>
        <div className='cart-btn'>
            <Link to="cart">
                <span  >{total} ₽</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                <span ><AiOutlineShoppingCart />{cartData.length > 0 ?cartData.length:null }</span>
            </Link>
        </div>
    </header>
  )
} 

export default Header