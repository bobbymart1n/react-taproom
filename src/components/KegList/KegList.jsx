import React from 'react';
import KegListItem from './KegListItem/KegListItem';
import AddKegButton from './AddKegButton/AddKegButton';
import SellKegButton from './SellKegButton/SellKegButton';
function KegList() {
  return (
    <div>
      <KegListItem />
      <SellKegButton />
      <AddKegButton />
    </div>
  );
}

export default KegList;
