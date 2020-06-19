import React from "react";
import searchbarData from "../data/searchbarData";

let {genders, sizes, colors, styles} = searchbarData

class SearchBar extends React.Component { 
    
  constructor(props) {
    super(props);
    this.state = {
        value: ' '
        
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submit = this.submit.bind(this);
  }  

  changeHandler = (e) =>{
     
    this.setState({ value : e.target.value})
        
    
        
  }

  submit = event => {
    console.log(`New color : ${this.state.value}`)
    event.preventDefault()
  }
  
  render(){

    return (
      <aside id="search_category">

          <form id="search_category_form" onSubmit={this.submit}>

               <label>{this.props.labelname}</label> 

              <select name={genders[0].name} value={genders[0].options.value} onChange={this.changeHandler} placeholder={genders[0].placeholder}>               
                  {                            
                      genders[0].options.map(option => 
                          <option 
                          value={option.value} key={option.id}                          
                          >
                              {option.displayValue}

                          </option>
                      )
                  }  
              </select>

              <select name={styles[0].name} value={styles[0].options.value} onChange={this.changeHandler} placeholder={styles[0].placeholder}>
              {
                  styles[0].options.map(option => 
                      <option value={option.value} key={option.id}>
                          {option.displayValue}
                      </option>
                  )
              }  
              </select>

              <select name={sizes[0].name} value={sizes[0].options.value} onChange={this.changeHandler} placeholder={sizes[0].placeholder}>
                  {
                      sizes[0].options.map(option => 
                          <option value={option.value} key={option.id}>
                              {option.displayValue}
                          </option>
                      )
                  }                        
              </select>

              <select name={colors[0].name} value={colors[0].options.value} onChange={this.changeHandler} placeholder={colors[0].placeholder}>
                  {
                      colors[0].options.map(option => 
                          <option value={option.value} key={option.id}>
                              {option.displayValue}
                          </option>
                      )
                  }
              </select>
         
              
              <button name="find" className="search_category_btn" type="submit">Go</button>
          </form>
      </aside>

  );

  }
          
        
   
}

export default SearchBar;

