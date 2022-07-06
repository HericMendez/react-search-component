
import MockData  from './data/MOCK_DATA.json'
import Table from "./components/Table";



function App() {



  return (
    <div className="flex justify-center align-middle flex-col mx-8 ">
      <Table data={MockData}/>
    </div>
  );
}

export default App;
