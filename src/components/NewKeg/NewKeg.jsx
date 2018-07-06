import React from 'react';

function NewKeg(props) {
  const handleNewKegFormSubmission = (e) => e.preventDefault();
  return (
    <div>
      <input />
      <input />
      <input />
      <input />
      <input />
      <button type='submit'>Add Keg</button>
    </div>
  );
}

export default NewKeg;
