import React from "react";
import logo from "../images/shoe-store-logo.png";
import $ from "jquery";
class Header extends React.Component {
  componentDidMount() {
    var $mainmenu = $("button#side-bar-toggle-btn");

    $mainmenu.on("click", function(event) {
      event.preventDefault();

      show_menu();
    });

    function show_menu() {
      // create menu variables
      var slideoutMenu = $("#content #left_bar");
      var slideoutMenuWidth = $("#content #left_bar").width();

      // toggle open class
      slideoutMenu.toggleClass("open");

      // slide menu
      if (slideoutMenu.hasClass("open")) {
        slideoutMenu.animate({
          left: "0px"
        });
      } else {
        slideoutMenu.animate(
          {
            left: -slideoutMenuWidth
          },
          500
        );
      }
    }

    //menu
    $("button#menu-toggle-btn").on("click", function(event) {
      event.preventDefault();

      $("nav ul#mobile-nav")
        .slideToggle(500)
        .css("display", "block");
    });
  }

  render() {
    return (
      <header>
        <figure id="logo">
          <img src={logo} alt="shoe-store-logo" />
        </figure>

        <button id="menu-toggle-btn">MENU</button>
      </header>
    );
  }
}

export default Header;
