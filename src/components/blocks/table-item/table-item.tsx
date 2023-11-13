import * as React from 'react';

interface PostType {
  item: {
    id: number;
    url_photo: string;
    text: string;
    date: string;
  };
}

const TableItem: React.FC<PostType> = ({ item }) => {
  return (
    <div className="table__item">
      <img className="table__item-photo" src={item.url_photo} alt={item.text} />
    </div>
  );
};

export default TableItem;
