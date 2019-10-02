import React from "react";

const accordion = () => {
  var acc = document.getElementsByClassName("accordion");

  var i;

  for (i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function(event) {

      event.preventDefault();
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;

      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
};

function FindShoesAccord() {
  return (
    <nav id="sec_nav">
      <div id="accordion">
        <button onClick={accordion} className="accordion">
          Men&acute;s Shoes
        </button>
        <div className="panel">
          <ul>
            <li>Skate Shoes</li>
            <li>Boat </li>
            <li>Fashion</li>
            <li>Formal </li>
            <li></li>
          </ul>
        </div>

        <button onClick={accordion} className="accordion">
          Women&acute;s Shoes
        </button>
        <div className="panel">
          <ul>
            <li>Boots</li>
            <li>Boat </li>
            <li>Fashion</li>
            <li>Formal </li>
          </ul>
        </div>

        <button onClick={accordion} className="accordion">
          Kids&acute;s Shoes
        </button>
        <div className="panel">
          <ul>
            <li>Trainers</li>
            <li>Boat </li>
            <li>Fashion</li>

            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default FindShoesAccord;
