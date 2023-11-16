import * as React from 'react';
import { IComments } from '../../../models/IPosts';
import Avatar from '../../svg/avatar/avatar';

interface CommentType {
  comment: IComments;
  isSecond: boolean;
}

const CommentChat: React.FC<CommentType> = ({ comment, isSecond }) => {
  const classText: string = isSecond ? 'chat__message-text--second' : 'chat__message-text';
  return (
    <div className="chat">
      <div className="chat__user">
        <div className="chat__user-img">
          <Avatar />
        </div>
        <div className="chat__user-name">{comment.user}</div>
      </div>
      <div className="chat__message">
        <p className={classText}>{comment.text}</p>
        {!isSecond && <button className="chat__button">Ответить</button>}
      </div>
    </div>
  );
};

export default CommentChat;
