import React from 'react';

function FindShoes() {
  return (
    <article id="searchbox">
      <form id="searcher" action="" method="get">
        <h1>
          FIND
          <br />
          YOUR SHOES
        </h1>
        <br />
        <select name="gender">
          <option value="Male">Mens</option>
          <option value="Female">Women</option>
          <option value="Kids">Kids</option>
        </select>
        <select name="foot-size">
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11+</option>
        </select>
        <select name="shoe-type">
          <option value="Trainers">Trainers</option>
          <option value="Ladies Boots">Ladies Boots</option>
          <option value="Skate Shoes">Skate Shoes</option>
          <option value="Boots">Boots</option>
        </select>
        <input name="find" className="find" type="submit" value="FIND" />
      </form>
    </article>
  );
}

export default FindShoes;
