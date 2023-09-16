import React from 'react';
import { Styled_Search } from './Search.style';

interface SearchProps {
  $iconSize: number;
}
const Search = ({ $iconSize }: SearchProps) => {
  return (
    <Styled_Search.Svg
      width={`${$iconSize}`}
      height={`${$iconSize}`}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 26L20.2094 20.2094M20.2094 20.2094C21.1999 19.2189 21.9856 18.043 22.5217 16.7488C23.0577 15.4547 23.3336 14.0676 23.3336 12.6668C23.3336 11.266 23.0577 9.87896 22.5217 8.5848C21.9856 7.29065 21.1999 6.11474 20.2094 5.12424C19.2189 4.13373 18.043 3.34802 16.7488 2.81196C15.4547 2.27591 14.0676 2 12.6668 2C11.266 2 9.87896 2.27591 8.5848 2.81196C7.29065 3.34802 6.11474 4.13373 5.12424 5.12424C3.12382 7.12466 2 9.8378 2 12.6668C2 15.4958 3.12382 18.209 5.12424 20.2094C7.12466 22.2098 9.8378 23.3336 12.6668 23.3336C15.4958 23.3336 18.209 22.2098 20.2094 20.2094Z"
        stroke="#F54D42"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Styled_Search.Svg>
  );
};

export default Search;
