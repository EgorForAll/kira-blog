import * as React from 'react';
import Like from '../../svg/like/like';

const DisplayLikes = ({ likes }: { likes: number }) => {
  return (
    <div className="display-likes">
      <span className="table__item-number">{likes}</span>
      <Like />
    </div>
  );
};

export default DisplayLikes;
