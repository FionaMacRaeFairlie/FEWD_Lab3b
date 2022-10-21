import React from 'react';
const StudentCategoryRow =(props)=> {
      return (
        <tr>
          <th colSpan="2">
            {props.category}
          </th>
        </tr>
      );
    }
export default StudentCategoryRow;