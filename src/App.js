import { useState, useEffect } from "react";
import Search from "./components/Search";
import { busca } from "./data/Api";
import MockData  from './data/MOCK_DATA.json'



function App() {

  const [data, setData] = useState();

  useEffect(() => {
    busca(setData, "brl", "50", "1");
  }, []);

  console.log(data)
  return (
    <div className="flex justify-center align-middle flex-col">
      <Search data={MockData}/>
    </div>
  );
}

export default App;
