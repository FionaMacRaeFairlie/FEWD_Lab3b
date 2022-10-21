import React from 'react';
import StudentRow from './StudentRow';
  
 const StudentTable =(props)=> {
   
      const filterText = props.filterText;
      const final = props.final;
      const third = props.third;
      const second = props.second;
      const first = props.first;
  
      const rows = [];
  
     props.students.forEach((student) => {
        if ((student.firstName.indexOf(filterText) === -1)&&(student.lastName.indexOf(filterText) === -1)&&(student.number.indexOf(filterText) === -1) ){
          return;
        }
         if ((final && !student.final)){
          return;
        }
        if (third && !student.third) {
          return;
        }
        if (second && !student.second) {
          return;
        }
        if (first && !student.first) {
          return;
        }
        rows.push(
          <StudentRow
            student={student}
            key={student.number}
          />
        );
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Session</th>
              <th>Year of study</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
export default StudentTable;