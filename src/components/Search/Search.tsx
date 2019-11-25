import * as React from 'react';
import './Search.scss';
export interface SearchProps {

}

const Search: React.FC<SearchProps> = () => {
  return (
    <form>
      <input type="text" placeholder="Search Country"/>
      <button>
        search
      </button>
    </form>
  );
}

export default Search;