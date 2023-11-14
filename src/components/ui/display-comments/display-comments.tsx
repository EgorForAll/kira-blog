import * as React from 'react';
import CommentSvg from '../../svg/baloon-comment/balloon-comment';

const DisplayComments = ({ comments }: { comments: number }) => {
  return (
    <div className="display-comments">
      <span className="table__item-number">{comments}</span>
      <CommentSvg />
    </div>
  );
};

export default DisplayComments;
