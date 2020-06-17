import React from "react";

const accordion = () => {

  var acc = document.getElementsByClassName("accordion");    

  for ( let i = 0; i < acc.length; i++) { 
            
    acc[i].addEventListener("click", function(event) {   
            
      event.preventDefault();
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
      
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;

      console.log(this.nextElementSibling)
      
      if (panel.style.display !== "block") {
        panel.style.display = "block";
      } else {
        panel.style.display = "none";
      }
    });
  }
};

const FindShoesAccord = () => {
  return (
    <nav id="acc_nav">

      <div id="accContainer">
        <button onMouseEnter={accordion} className="accordion">
          Men
        </button>
        <div className="panel">
          <ul>
            <li>Skate Shoes</li>
            <li>Boots</li>
            <li>Mens Boots</li>
            <li>Trainers</li>
            <li></li>
          </ul>
        </div>

        <button onMouseEnter={accordion} className="accordion">
          Women
        </button>
        <div className="panel">
          <ul>
            <li>Skate Shoes</li>
            <li>Boots</li>
            <li>Ladies Boots</li>
            <li>Trainers</li>
          </ul>
        </div>

        <button onMouseEnter={accordion} className="accordion">
          Kids
        </button>
        <div className="panel">
          <ul>
            <li>Baby Shoes</li>
            <li>Baby Boots</li>
            <li>Kids Boots</li>
            <li>Trainers</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default FindShoesAccord;
