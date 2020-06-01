import React from "react";

function SearchBar(props) {
      
  return (
    <aside id="search_category">
        <form id="search_category_form" action="" method="get">
            <label>{props.labelname}</label>
            <select name="gender">
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Women">Kids</option>
            </select>
            <select name="style" >
                <option value="Trainers">Trainers</option>
                <option value="Ladies Boots">Ladies Boots</option>
                <option value="Skate Shoes">Skate Shoes</option>
                <option value="Boots">Boots</option>
            </select>
            <select name="size">
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11+</option>
            </select>
            <select name="color">
                <option value="Red">Red</option>
                <option value="Black">Black</option>
                <option value="Green">Green</option>
                <option value="White">White</option>
            </select>
            <button name="find" className="search_category_btn" type="submit">Go</button>
        </form>
    </aside>
        
  );
}

export default SearchBar;
