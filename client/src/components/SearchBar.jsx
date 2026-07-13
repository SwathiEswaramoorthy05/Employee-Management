// function SearchBar({ value, onChange }) {
//   return (
//     <input
//       className="form-control"
//       placeholder="Search Employee..."
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//     />
//   );
// }

// export default SearchBar;
import { FaSearch } from "react-icons/fa";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-box">
      <FaSearch className="search-icon" />

      <input
        className="form-control"
        placeholder="Search Employee..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
