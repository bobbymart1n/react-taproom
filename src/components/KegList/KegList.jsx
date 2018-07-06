import React from 'react';
import PropTypes from 'prop-types';
import KegListItem from './KegListItem/KegListItem';
import AddKegButton from './AddKegButton/AddKegButton';

import styles from './KegList.css';

function KegList(props) {
  return (
    <div className={styles.kegList}>
      <AddKegButton />
      {Object.keys(props.kegList).map((kegId) => {
        let beer = props.kegList[kegId];
        return <KegListItem
          name={beer.name}
          brewer={beer.brewer}
          description={beer.description}
          abv={beer.abv}
          price={beer.price}
          remaining={beer.remaining}
          onSellingPint={props.onSellingPint}
          key={kegId}/>;
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onSellingPint: PropTypes.func.isRequired
};

export default KegList;
