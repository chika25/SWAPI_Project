import './App.css';
import { AgGridReact } from 'ag-grid-react';
import {useState, useEffect, useMemo} from "react";
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css";


function App() {
  const [rowData, setRowData] = useState([]);
  
  //Define the columns
  const [columnDefs, setColumnDefs] = useState([
    {field: "name"},
    {field: "birth_year"},
    {field: "eye_color"},
    {field: "gender"},
    {field: "hair_color"},
    {field: "height"},
    {field: "mass"},
    {field: "skin_color"},
    {field: "homeworld"},
    {field: "films"},
    {field: "species"},
    {field: "starships"},
    {field: "vehicles"},
    {field: "url"},
    {field: "created"},
    {field: "edited"}
  ]);


  //add sortable:true, filter:true to all columns
  const defaultColDef = useMemo(()=> ({
    sortable: true,
    filter: true
  }), []);

 //Fetch People table
 useEffect(()=>{
  fetch("https://swapi.dev/api/people/")
  .then(result => result.json())
  .then(json => setRowData(json.results)) //Set json.results to rowData
  .catch((e)=>{
    console.log(`Fetch faild: ${e}`)
})
}, []);

  //Display table
  return (
    <div className="ag-theme-alpine" style={{height: 500}}>
      <h1>People</h1>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        />
    </div>
  );
}

export default App;
