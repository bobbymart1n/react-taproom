import React from 'react';
import PropTypes from 'prop-types';
import KegListItem from './KegListItem/KegListItem';
import AddKegButton from './AddKegButton/AddKegButton';

import styles from './KegList.css';

function KegList(props) {
  return (
    <div className={styles.kegList}>
      <AddKegButton />
      {props.kegList.map((beer, index) =>
        <KegListItem
          name={beer.name}
          brewer={beer.brewer}
          description={beer.description}
          abv={beer.abv}
          price={beer.price}
          remaining={beer.remaining}
          key={index}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
