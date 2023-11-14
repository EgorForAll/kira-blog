import * as React from 'react';
import { IPosts } from '../../../models/IPosts';

interface PaginationType {
  photosPerPage: number;
  totalPhotos: number;
  togglePage: (number: number) => void;
}

const Pagination: React.FC<PaginationType> = ({ photosPerPage, totalPhotos, togglePage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagiantion">
      {pageNumbers.map((item, index) => (
        <li className="pagination__page-item" key={index}>
          <button className="pagination__button" onClick={() => togglePage(item)}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
