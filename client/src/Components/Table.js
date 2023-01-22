import React,{ useState, useEffect }  from "react";
import DataTable from 'react-data-table-component';




function Table({refreshData}) {
    const [data, setData] = useState([]);
   
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/getAllCards');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [refreshData]);
    
    const column = [
        {
            name:"Name",
            selector: row => row.name,
            sortable: true,
            width:"200px"
        },
        {
            name:"Card Number",
            selector: row => row.cardNumber,
            sortable: true,
            width:"200px"
        },
        {
            name:"Balance",
            selector: row => row.balance,
            sortable: true,
            width:"100px"
        },
        {
            name:"Limit",
            selector: row => row.limit,
            sortable: true,
            width:"100px"
        }
    ]


   
    return (
        <DataTable title="Existing Credit Cards" columns={column} data={data} pagination />
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Card Number</th>
    //         <th>Limit</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((item, index) => (
    //         <tr key={index}>
    //           <td>{item.name}</td>
    //           <td>{item.cardNumber}</td>
    //           <td>{item.limit}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    );
  }

  export default Table;