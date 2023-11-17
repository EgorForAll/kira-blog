import * as React from 'react';
import { IPosts } from '../../models/IPosts';

interface IState {
  isCommentMode: boolean;
}

interface IWrapped {
  setCommentMode: () => void;
}

const PostHoc = (WrappedComponent: React.FC<IWrapped>, post: IPosts) => {
  return class extends React.Component<{}, IState> {
    constructor(props: any) {
      super(props);
      this.countComments = this.countComments.bind(this);
      this.state = {
        isCommentMode: false
      };
    }

    countComments() {
      const commentsNumber = post.comments ? post.comments.length : 0;
      const responseNumber = post.comments
        ? post.comments.reduce((sum, cur) => (cur.response ? sum + cur.response.length : sum), 0)
        : 0;
      const totalComments = commentsNumber + responseNumber;
      return totalComments;
    }

    setCommentMode() {
      this.setState({ isCommentMode: !this.state.isCommentMode });
    }

    render(): React.ReactNode {
      return <WrappedComponent setCommentMode={this.setCommentMode} />;
    }
  };
};

export default PostHoc;
