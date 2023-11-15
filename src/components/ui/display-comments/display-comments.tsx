import * as React from 'react';
import CommentSvg from '../../svg/baloon-comment/balloon-comment';

interface CommentTypes {
  commentsNumber: number;
}

const DisplayComments: React.FC<CommentTypes> = ({ commentsNumber }) => {
  return (
    <div className="display-comments">
      <span className="table__item-number">{commentsNumber}</span>
      <CommentSvg />
    </div>
  );
};

export default DisplayComments;
