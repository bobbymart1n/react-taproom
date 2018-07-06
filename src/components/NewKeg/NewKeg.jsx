import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewKeg.css';

function NewKeg(props) {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  const handleNewKegFormSubmission = (e) => {
    e.preventDefault();
    props.onAddingNewKeg({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: 124});
    _name.value = '';
    _brewer.value = '';
    _description.value = '';
    _abv.value = '';
    _price.value = '';
  };
  return (
    <div className={styles.kegForm}>
      <h1>Add a New Keg</h1>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input;}}/>
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
      </form>
    </div>
  );
}

NewKeg.propTypes = {
  onAddingNewKeg: PropTypes.func
};

export default NewKeg;
