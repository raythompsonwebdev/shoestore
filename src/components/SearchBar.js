import React from "react";


function SearchBar(props) {
    
  return (
    <aside id="searchbar">
        <form id="searcher2" action="" method="get">
            <label>{props.labelname}</label>
            <select name="gender">
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Women">Children</option>
            </select>
            <select name="style" >
                <option value="Athletics">Athletics</option>
                <option value="Fashion">Fashion</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Sandals">Sandals</option>
                <option value="Work">Work</option>
            </select>
            <select name="size">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
            <select name="color">
                <option value="Red">Red</option>
                <option value="Black">Black</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
                <option value="White">White</option>
            </select>
            <button name="find" className="find2" type="submit">Go</button>
        </form>
    </aside>
        
  );
}

export default SearchBar;
