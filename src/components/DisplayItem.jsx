import React from "react";

const DisplayItem = (props) => {

  return (
    <tr
      className="text-justify  justify-between align-center p-8 border-y-2 border-gray-300"
      
    >
      <td className="py-4 text-left">
        {props.value.first_name} {props.value.last_name}
      </td>
      <td className="py-2 text-right">{props.value.email} </td>
    </tr>
  );
};

export default DisplayItem;
