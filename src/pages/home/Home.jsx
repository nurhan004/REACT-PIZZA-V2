import { useContext } from 'react';
import Button from '../../components/buttons/Button'
import './Home.css'
import { RiAddFill } from "react-icons/ri";
import { APPCONTEXT } from '../../context/AppContext';

const Home = (props) => {
    const { setCartData } = useContext(APPCONTEXT)

    const addToCart = (product) => {
        setCartData((oldPizza) => {
            const arr = [...oldPizza, product]
            localStorage.setItem('cart',JSON.stringify(arr))
            return arr;
        })
    }
    return (
        <div>
            <Button />
            <h3 className='madi'>Все пиццы</h3>
            <div className='home-pizza'>
                {props.data.map(pizza => {
                    return (
                        <div key={pizza.name} className='pizza-card'>

                            <div className='pizza-card-img'>
                                <img src={pizza.image} alt="" />
                                <h4>{pizza.name}</h4>

                            </div>
                            <div className='pizza-card-text'>

                                <div className='pizza-type'>
                                    {pizza.crusts.map(item => <p key={item}>{item}</p>)}
                                </div>
                                <div className='pizza-sizes'>
                                    {pizza.sizes.map(size => <p key={size}>{size}</p>)}
                                </div>
                            </div>
                            <div className='pizza-card-footer'>
                                <h4 style={{fontSize:'22px',fontWeight:'',fontFamily:'sans-serif'}}>от {pizza.price}</h4>
                                <button onClick={() => {
                                    addToCart(pizza)
                                }} style={{ display: 'flex' }}>
                                    <span><RiAddFill /></span>
                                    Добавить
                                </button>
                            </div>
                        </div>

                    )
                })}


            </div>

        </div>
    )

}

export default Home