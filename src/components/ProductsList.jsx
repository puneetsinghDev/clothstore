import {
  IndexTable,
  TextStyle,
  Card,
  useIndexResourceState,
  Button,
  Layout
} from "@shopify/polaris";
 
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { AgGridReact } from 'ag-grid-react';
 
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import '../assets/external-css/productsExport.css';
import {test2} from "./test2";
import {test} from "./test";
import * as XLSX from "xlsx";
 
export function ProductsList({data}) {
  
  console.log(data.nodes)
  const newData = data.nodes;
  const gridRef = useRef(); // Optional - for accessing Grid's API
 // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
   {field: 'handle', filter: true},
   {field: 'title', filter: true},
   {field: 'variants.edges.0.node.price', headerName: 'Price', filter: true},
   {field: 'variants.edges.0.node.compareAtPrice', headerName: 'Compare Pirce', filter: true},
   {field: 'variants.edges.0.node.sku',  headerName: 'SKU' ,filter: true},
 
  ]);
 
 // DefaultColDef sets props common to all Columns
 const defaultColDef = useMemo( ()=> ({
     sortable: true,
     flex: 1
   }));
 
 // Example using Grid's API
 const buttonListener = useCallback( e => {
   gridRef.current.api.deselectAll();
 }, []);
 
let gridApi;
const onGridReady=params=>{
  gridApi=params.api
}
 
const onExportClick = () => {
  console.log(gridApi)
  gridApi.exportDataAsCsv();
}
 
 const onChange_id = (e) => {
  console.log("i am in");
 
  const [file] = e.target.files;
  const reader = new FileReader();

  reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr,{type:"binary"});
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_csv(ws, {header: 1});
      console.log(data);
      // console.log(test(data));//call api by axios way 
      console.log(test2());//call api by shopify way
      // console.log(`The result is: ${result}`);


      // const jsonData = convertToJson(data);
      // console.log(jsonData); // shows data in json format
     
      // console.log(jsonData.length)
  };
      reader.readAsBinaryString(file);
      
        };

const onImportClick = () => {
  console.log(document.getElementById('fileUpload').value);
  console.log(test2());
}
 return (
  <Card sectioned>
   <div >
   <button onClick={onExportClick} className='exportBtn'>Export Excel</button>
     {/* <button onClick={onImportClick} className='exportBtn'>Import Excel</button> */}
     <input type="file" onChange={onChange_id} />
     {/* <input class="inputInsert" type="file" accept=".xlsx" id="fileUpload" onChange={onImportClick}/>
        <button class="insertButton"  >UPLOAD</button> */}
     {/* <Import /> */}
     {/* <button className='importBtn'>Import Excel</button> */}
     <br />
     <br />
     <br />
     <div className="ag-theme-alpine" style={{width:'100%', height: 500}}>
       <AgGridReact
           ref={gridRef}
           rowData={newData}
           columnDefs={columnDefs}
           defaultColDef={defaultColDef}
           onGridReady={onGridReady}
           />
     </div>
   </div>
   </Card>
 );
};
 

