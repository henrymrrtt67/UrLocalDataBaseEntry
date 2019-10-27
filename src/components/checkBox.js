//imports relevant files
import React from 'react';

//creates a const checkbox
const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  // creates thhe checkbox by creating the label and checkbox, dependant on the label input
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        // is checking if the checkbox is selected
        checked={isSelected}
        //changes based on whether the checkbox is selected
        onChange={onCheckboxChange}
        //sets the classname of this.
        className="form-check-input"
      />
      
      {label}
    </label>
  </div>
);
export default Checkbox;