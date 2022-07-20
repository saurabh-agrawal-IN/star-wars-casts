import '../styles/action-bar.css';
import SearchBar from './search-bar';
import SortBy from './sort-by';

const ActionBar = () => {
  return (
    <div className='action-bar'>
      <SearchBar />
      <SortBy/>
    </div>
  );
}

export default ActionBar;
