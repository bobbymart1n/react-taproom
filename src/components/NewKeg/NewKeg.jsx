import React from 'react';
import PropTypes from 'prop-types';

function NewKeg(props) {
  const handleNewKegFormSubmission = (e) => {
    e.preventDefault();
    props.onAddingNewKeg({brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, });
    _brewer.value = '';
    _description.value = '';
    _abv.value = '';
    _price.value = '';
  };
  return (
    <div onSubmit={handleNewKegFormSubmission}>
      <input
        type='text'
        id='brewer'
        placeholder='Brewer'
        ref={(input) => {_brewer = input;}}/>
      <input
        type='text'
        id='description'
        placeholder='Description'
        ref={(input) => {_description = input;}}/>
      <input
        type='text'
        id='abv'
        placeholder='ABV'
        ref={(input) => {_abv = input;}}/>
      <input
        type='text'
        id='price'
        placeholder='Price'
        ref={(input) => {_price = input;}}/>
      <button type='submit'>Add Keg</button>
    </div>
  );
}

NewKeg.propTypes = {
  onAddingNewKeg: PropTypes.func
};

export default NewKeg;
