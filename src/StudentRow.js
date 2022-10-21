import React from "react";

const StudentRow = (props) => {
  const student = props.student;
//   const name = student.stocked ? (
//     student.name
//   ) : (
//     <span style={{ color: "red" }}>{student.name}</span>
//   );

  return (
    <tr>
      {/* <td>{name}</td> */}
      <td>{student.number}</td>
      <td>{student.session}</td>
      <td>{student.year}</td>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
    </tr>
  );
};
export default StudentRow;
