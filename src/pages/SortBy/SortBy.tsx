import React, { useEffect, useRef, useState } from 'react';
import { SortOptions } from '../../types/SortOptions';
import { PagesCount } from '../../types/PagesCount';
import './SortBy.scss';
import cn from 'classnames';

interface Props {
  option: SortOptions;
  countPerPage: PagesCount;
  onSetSortOption: (value: SortOptions) => void;
  onSetCountPages: (value: PagesCount) => void;
}

export const SortBy: React.FC<Props> = ({
  option,
  countPerPage,
  onSetCountPages,
  onSetSortOption
}) => {
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [isOpenCountPage, setIsOpenCountPage] = useState(false);

  const optionsRef = useRef<HTMLDivElement>(null);
  const countPageRef = useRef<HTMLDivElement>(null);

  const handlerShowOptions = () => {
    setIsOpenOptions((prev) => !prev);
    if (isOpenCountPage) setIsOpenCountPage(false);
  };

  const handlerShowCountPage = () => {
    setIsOpenCountPage((prev) => !prev);
    if (isOpenOptions) setIsOpenOptions(false);
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node) &&
        countPageRef.current &&
        !countPageRef.current.contains(event.target as Node)
      ) {
        setIsOpenOptions(false);
        setIsOpenCountPage(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="sort">
      <div className="sort__group">
        <div className="sort__label">Sort by</div>
        <div
          ref={optionsRef}
          className={cn('sort__select sort__select--option', {
            'sort__select--is-open': isOpenOptions,
            'sort__select--is-close': !isOpenOptions,
          })}
          onClick={handlerShowOptions}
        >
          {option}
          {isOpenOptions && (
            <div className="sort__options">
              {Object.values(SortOptions).map((option) => (
                <div className="sort__option" key={option} onClick={() => onSetSortOption(option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="sort__group">
        <div className="sort__label">Items on page</div>
        <div
          ref={countPageRef}
          className={cn('sort__select', {
            'sort__select--is-open': isOpenCountPage,
            'sort__select--is-close': !isOpenCountPage,
          })}
          onClick={handlerShowCountPage}
        >
          {countPerPage}
          {isOpenCountPage && (
            <div className="sort__options">
              {Object.values(PagesCount).map((value) => (
                <div
                  className="sort__option"
                  key={value}
                  onClick={() => {
                    onSetCountPages(value);
                  }}
                >
                  {value}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
