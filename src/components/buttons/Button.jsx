import React, { useState } from "react";
import "./Button.css";
import { IoCaretUpOutline } from "react-icons/io5";

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
    <div className="" style={{ display: 'flex', gap: '20px', marginTop: '50px' }}>
      <button className="vse bg-slate-100">Все</button>
      <button className="meat bg-slate-100">Мясное</button>
      <button className="vega bg-slate-100">Вегетарианская</button>
      <button className="gril bg-slate-100">Гриль</button>
      <button className="spai bg-slate-100">Острые</button>
      <button className="sak bg-slate-100">Закрытые</button>

      <div className="dropdown w-[900px]">
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





