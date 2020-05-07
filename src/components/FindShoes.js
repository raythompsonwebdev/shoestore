import React from "react";

function FindShoes() {
  return (
    <article id="searchbox">
    <form id="searcher" action="" method="get">
      <h1>
        FIND <br />
        YOUR SHOES
      </h1>
      <br />
      <select name="gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select name="foot-size">
        <option value="1-3">1-3</option>
        <option value="4-7">4-7</option>
        <option value="8-11">8-11</option>
        <option value="11+">11+</option>
      </select>
      <select name="type-of-shoe">
        <option value="Casual">Casual</option>
        <option value="Dress">Dress</option>
        <option value="Boots">Boots</option>
        <option value="Work">Work</option>
      </select>
      <input name="find" className="find" type="submit" value="FIND" />
    </form>
  </article>

  );
}

export default FindShoes;