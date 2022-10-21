import React, { useState } from "react";
import StudentTable from "./StudentTable";
import SearchBar from "./SearchBarStudent";

const FilterableStudentTable = (props) => {
  const [filterText, setFilterText] = useState("");
  const [final, setFinal] = useState(false);
  const [third, setThird] = useState(false);
  const [second, setSecond] = useState(false);
  const [first, setFirst] = useState(false);

  function handleFilterTextChange(newFilterText) {
    console.log(filterText)
    setFilterText(newFilterText);
  }

  function handleDisplayFinal() {
    final ? setFinal(false) : setFinal(true);
  }
  function handleDisplayThird() {
    third ? setThird(false) : setThird(true);
  }
  function handleDisplaySecond() {
    second ? setSecond(false) : setSecond(true);
  }
  function handleDisplayFirst() {
    first ? setFirst(false) : setFirst(true);
  }

  return (
    <div>
      {
        <SearchBar
          filterText={filterText}
          final={final}
          third={third}
          second={second}
          first={first}
          onFilterTextChange={handleFilterTextChange}
          onFinalChange={handleDisplayFinal}
          onThirdChange={handleDisplayThird}
          onSecondChange={handleDisplaySecond}
          onFirstChange={handleDisplayFirst}
        />
      }
      <StudentTable
        students={props.students}
        filterText={filterText}
        final={final}
        third={third}
        second={second}
        first={first}
      />
    </div>
  );
};
export default FilterableStudentTable;
