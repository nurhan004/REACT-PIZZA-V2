import React, { useState } from "react";
import "./Button.css";
import { IoCaretUpOutline } from "react-icons/io5";

const btnApi = [
  {
    name:'Все'
  },
  {
    name:'Мясное'
  },
  {
    name:'Вегетарианская'
  },
  {
    name:'Гриль'
  },
  {
    name:'Острые'
  },
  {
    name:'Закрытые'
  },
]

const Button = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("популярности (desc)");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
    setDropdownOpen(false);
  };
  return (
    <div  style={{ display: 'flex',marginLeft:'70px', gap: '20px', marginTop: '50px' }}>
      {btnApi.map(btn=> {
        return(
          <div key={btn.name}>
            <div className="btndiv">
            <button className="vse">{btn.name}</button>


            </div>
          

          </div>

        )
        
        
      })}
      

      <div className="dropdown ">
      <p className="sort" onClick={toggleDropdown}>
        <span className="span" ><IoCaretUpOutline /></span>Сортировка по: <span className="selected-sort">{selectedSort}</span>
      </p>

      {isDropdownOpen && (
        <div className="dropdown-content">
          <p onClick={() => handleSortChange("популярности (desc)")}>популярности (desc)</p>
          <p onClick={() => handleSortChange("популярности (asc)")}>популярности (asc)</p>
          <p onClick={() => handleSortChange("цена (desc)")}>цена (desc)</p>
          <p onClick={() => handleSortChange("цена (asc)")}>цена (asc)</p>
          <p onClick={() => handleSortChange("алфавиту (desc)")}>алфавиту   (desc)</p>
          <p onClick={() => handleSortChange("алфавиту (asc)")}>алфавиту   (asc)</p>

        </div>
      )}
    </div>
    </div>
  );
};

export default Button;





