import React, { useEffect, useRef, useState } from 'react';
import { SortOptions } from '../../types/SortOptions';
import { PerPageCount } from '../../types/PerPageCount';
import './SortBy.scss';
import cn from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { SearchParamsType } from '../../types/SearchParamsType';
import { useTranslation } from 'react-i18next';

export const SortBy: React.FC = () => {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();

  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [isOpenCountPage, setIsOpenCountPage] = useState(false);

  const sortOption = (searchParams.get(SearchParamsType.sort) ?? 'age') as keyof typeof SortOptions;

  const countPerPage =
    (searchParams.get(SearchParamsType.perPage) as PerPageCount) || PerPageCount.All;

  const optionsRef = useRef<HTMLDivElement>(null);
  const countPageRef = useRef<HTMLDivElement>(null);

  const setSerchSortOption = (value: keyof typeof SortOptions) => {
    const newParams = new URLSearchParams(searchParams);

    value === 'age'
      ? newParams.delete(SearchParamsType.sort)
      : newParams.set(SearchParamsType.sort, value);

    setSearchParams(newParams);
  };

  const setSerchPerPage = (value: PerPageCount) => {
    const newParams = new URLSearchParams(searchParams);
    value === PerPageCount.All ? newParams.delete('perPage') : newParams.set('perPage', value);
    newParams.set(SearchParamsType.page, '1');
    setSearchParams(newParams);
  };

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

  const translatedSortOptions = {
    age: t('sort_by.nevest'),
    title: t('sort_by.alphabetically'),
    price: t('sort_by.cheapest'),
  };

  const translatedPerPageOptions = {
    [PerPageCount.Four]: PerPageCount.Four,
    [PerPageCount.Eight]: PerPageCount.Eight,
    [PerPageCount.Sixteen]: PerPageCount.Sixteen,
    [PerPageCount.All]: t('perPage.all'),
  };

  return (
    <div className="sort">
      <div className="sort__group">
        <div className="sort__label">{t('sort_by.sort_by')}</div>

        <div
          ref={optionsRef}
          className={cn('sort__select sort__select--option', {
            'sort__select--is-open': isOpenOptions,
            'sort__select--is-close': !isOpenOptions,
          })}
          onClick={handlerShowOptions}
        >
          {translatedSortOptions[sortOption]}
          {isOpenOptions && (
            <div className="sort__options">
              {Object.keys(SortOptions).map((key) => (
                <div
                  className={cn('sort__option', {
                    'sort__option--selected': key === sortOption,
                  })}
                  key={key}
                  onClick={() => {
                    setSerchSortOption(key as keyof typeof SortOptions);
                  }}
                >
                  {translatedSortOptions[key as keyof typeof SortOptions]}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="sort__group">
        <div className="sort__label">{t('sort_by.items_on_page')}</div>

        <div
          ref={countPageRef}
          className={cn('sort__select', {
            'sort__select--is-open': isOpenCountPage,
            'sort__select--is-close': !isOpenCountPage,
          })}
          onClick={handlerShowCountPage}
        >
          {translatedPerPageOptions[countPerPage]}
          {isOpenCountPage && (
            <div className="sort__options">
              {Object.values(PerPageCount).map((value) => (
                <div
                  className={cn('sort__option', {
                    'sort__option--selected': value === countPerPage,
                  })}
                  key={value}
                  onClick={() => {
                    setSerchPerPage(value);
                  }}
                >
                  {translatedPerPageOptions[value]}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
