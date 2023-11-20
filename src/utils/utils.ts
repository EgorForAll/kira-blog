import { IPosts } from '../models/IPosts';

export const countComments = (post: IPosts) => {
  const commentsNumber = post.comments ? post.comments.length : 0;
  const responseNumber = post.comments
    ? post.comments.reduce((sum, cur) => (cur.response ? sum + cur.response.length : sum), 0)
    : 0;
  const totalComments = commentsNumber + responseNumber;
  return totalComments;
};
