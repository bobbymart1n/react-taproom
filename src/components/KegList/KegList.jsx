import React from 'react';
import KegListItem from './KegListItem/KegListItem';
import AddKegButton from './AddKegButton/AddKegButton';
function KegList() {
  return (
    <div>
      <KegListItem />
      <AddKegButton />
    </div>
  );
}

export default KegList;
