import React from "react";
import PropTypes from "prop-types";

function SelectGender(props) {
  // eslint-disable-next-line react/prop-types
  const { genders, changeHandler, value, name } = props;

  return (
    <select name={name} value={value} onChange={changeHandler}>
      {genders.options.map((option) => (
        <option value={option.value} key={option.id}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
}

SelectGender.defaultProps = {
  genders: {},
};
SelectGender.propTypes = {
  genders: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default SelectGender;
