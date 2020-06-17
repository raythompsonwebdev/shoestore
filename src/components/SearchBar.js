import React from "react";
import searchbarData from "../data/searchbarData";

let {genders, sizes, colors, styles} = searchbarData

let changeHandler = event => {

    const name = event.target.name;
    const value = event.target.value;   
  
    console.log(name +' -- ' + value)    
    
}

const SearchBar = (props) => {             
          
        return (
            <aside id="search_category">

                <form id="search_category_form" action="" method="get">

                    { <label>{props.labelname}</label> }

                    <select name={genders[0].name} value={genders[0].value} onChange={changeHandler} placeHolder = {genders[0].placeholder}>                       
                        {                            
                            genders[0].options.map(option => 
                                <option value={option.value} key={option.id} >
                                    {option.displayValue}
                                </option>
                            )
                        }  
                    </select>

                    <select name={styles[0].name} value={styles[0].value} onChange={changeHandler}>
                    {
                        styles[0].options.map(option => (
                            <option value={option.value} key={option.id}>
                                {option.displayValue}
                            </option>
                        ))
                    }  
                    </select>

                    <select name={sizes[0].name} value={sizes[0].value} onChange={changeHandler}>
                        {
                            sizes[0].options.map(option => (
                                <option value={option.value} key={option.id}>
                                    {option.displayValue}
                                </option>
                            ))
                        }                        
                    </select>

                    <select name={colors[0].name} value={colors[0].value} onChange={changeHandler}>
                        {
                            colors[0].options.map(option => (
                                <option value={option.value} key={option.id}>
                                    {option.displayValue}
                                </option>
                            ))
                        }
                    </select>
                    
                    
                    <button name="find" className="search_category_btn" type="submit">Go</button>
                </form>
            </aside>

        );
   
}

export default SearchBar;
