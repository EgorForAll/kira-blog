import * as React from 'react';
import { useState } from 'react';
import DisplayLikes from '../../ui/display-likes/display-likes';
import DisplayComments from '../../ui/display-comments/display-comments';
import { IPosts } from '../../../models/IPosts';

interface PostType {
  item: IPosts;
}

const TableItem: React.FC<PostType> = ({ item }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      className="table__item"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}>
      {hovered && (
        <div className="tabel__item-overlay">
          <div className="tabel__item-content">
            <DisplayLikes likes={item.likes} />
            <DisplayComments comments={item.comments} />
          </div>
        </div>
      )}
      <img className="table__item-photo" src={item.url_photo} alt={item.text} />
    </div>
  );
};

export default TableItem;
