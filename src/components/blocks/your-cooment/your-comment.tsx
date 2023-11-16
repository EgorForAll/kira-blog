import * as React from 'react';
import Avatar from '../../svg/avatar/avatar';
import { IComments } from '../../../models/IPosts';

interface CommentType {
  comments: IComments[];
}

const YourComment: React.FC<CommentType> = ({ comments }) => {
  return (
    <div className="your-comment animate__animated animate__fadeInDown">
      <div className="your-comment__user">
        <Avatar />
        <span className="your-comment__user-name">Вы</span>
      </div>
      <div className="your-comment__text">
        <form action="#" method="post" className="your-comment__form">
          <textarea
            name="your-comment"
            id="your-comment"
            className="your-comment__input"></textarea>
          <button className="your-comment__submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default YourComment;
