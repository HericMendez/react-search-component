import { useState, useRef, useEffect } from "react";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import DisplayItem from "./DisplayItem";

const tableHead = {
  first_name: "First Name",
  last_name: "Last name",
  email: "Email",
};

const Table = (props) => {
  const countPerPage = 10;
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollection] = useState(
    cloneDeep(props.data.slice(0, countPerPage))
  );
const onChangeHandler = (e) => setValue(e.target.value)
  const searchData = useRef(
    throttle((val) => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        props.data
          .filter((item) => item.first_name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );

      setCollection(data);
    }, 100)
  );

  useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value]);

  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(props.data.slice(from, to)));
  };

  const tableRows = (rowData) => {
    const { key, index } = rowData;
    const tableCell = Object.keys(tableHead);
    console.log(tableCell);
    const columnData = tableCell.map((keyD, i) => {
      return (
        <td className="py-4 text-left" key={i}>
          {key[keyD]}
        </td>
      );
    });
    return (
      <tr
        className="text-justify  justify-between align-center p-8 border-y-2 border-gray-300"
        key={index}
      >
        {columnData}
      </tr>
    );
  };

  const tableData = () => {
    return collection.map((key, index) => tableRows({ key, index }));
  };

  const headRow = () => {
    return Object.values(tableHead).map((title, index) => (
      <td key={index}>{title}</td>
    ));
  };

  return (
    <>
<DisplayItem headRow={headRow()} tableData={tableData()} onChangeHandler={onChangeHandler}/> 
      <div className="mx-auto p-8">
        <Pagination
          pageSize={countPerPage}
          onChange={updatePage}
          current={currentPage}
          total={props.data.length}
        />
      </div>
    </>
  );
};
export default Table

/*
onChangeHandler
headRow()
tableData()
*/