import * as React from 'react';

interface PaginationType {
  postsPerPage: number;
  loadMore: (number: number) => void;
}

const PaginationList: React.FC<PaginationType> = ({ postsPerPage, loadMore }) => {
  return (
    <button className="pagination-list" onClick={() => loadMore(postsPerPage + 4)}>
      Загрузить еще
    </button>
  );
};

export default PaginationList;
