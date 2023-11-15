import * as React from 'react';
import Like from '../../svg/like/like';

interface LikeTypes {
  likes: number;
}

const DisplayLikes: React.FC<LikeTypes> = ({ likes }) => {
  return (
    <div className="display-likes">
      <span className="table__item-number">{likes}</span>
      <Like />
    </div>
  );
};

export default DisplayLikes;
