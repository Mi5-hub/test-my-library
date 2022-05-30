import React, { useEffect, useState } from "react";
import axios from "axios";
import DataGrid from "datagrid-by-mino-randy/dist/datagrid-by-mino-randy";
import Button from "@mui/material/Button";
function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    };

    fetchData();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "RANG",
      width: 50,
      type:'number'
    },
    { field: "title", headerName: "TITLE", width: 200, type: "string" },
    {
      field: "userId",
      headerName: "NUMBER",
      width: 50,
      type: "number",
    },
    {
      field: "body",
      headerName: "BODY",
      width: 450,
      type: "string",
    },

  ];


  const editCell = async (fullData) => {
    console.log("====================================");
    console.log("values******", fullData);
    console.log("====================================");
   
  };


  return (
    <div>
      <DataGrid
        data={data}
        columns={columns}
        options
        columnHeight={3}
        paginations
        onDoubleClickFunction={editCell}
        headPositionText={"center"}
      />
    </div>
  );
}

export default HomePage;

