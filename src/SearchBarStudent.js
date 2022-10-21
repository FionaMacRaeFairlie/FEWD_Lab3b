import React from "react";

const SearchBar = (props) => {
  function handleFilterTextChange(e) {
    props.onFilterTextChange(e.target.value);
  }

  function handleFinalChange(e) {
    props.onFinalChange(e.target.checked);
  }
  function handleThirdChange(e) {
    props.onThirdChange(e.target.checked);
  }
  function handleSecondChange(e) {
    props.onSecondChange(e.target.checked);
  }
  function handleFirstChange(e) {
    props.onFirstChange(e.target.checked);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={handleFilterTextChange}
      />
      <p>
       <input
          type="checkbox"
          checked={props.final}
          onChange={handleFinalChange}
        />{" "}
        show final year students only
        </p> 
        <p><input
          type="checkbox"
          checked={props.third}
          onChange={handleThirdChange}
        /> {" "} 
        show third year students only
        </p> 
        <p><input
        type="checkbox"
          checked={props.second}
          onChange={handleSecondChange}
        />{" "}
        show second year students only
        </p> 
        <p><input
        type="checkbox"
          checked={props.first}
          onChange={handleFirstChange}
        />{" "}
        show first year students only
        </p> 
    </form>
  );
};

export default SearchBar;
