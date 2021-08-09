import React from 'react';


const DataTable = (tableData) => {

    //console.log(Object.keys(tableData.tableData[0]))
    return (
        <div className="text-sm overflow-y-auto max-h-full text-gray-200">
          <table>
          <thead>

          <tr>
            {
              Object.keys(tableData.tableData[0]).map((item) => 
              <th>{item}</th>)
            }
          </tr>
          </thead>
          <tbody>

            { tableData.tableData.map((item) => (
              <tr>
              {Object.keys(tableData.tableData[0]).map((col) => 
              <td>{item[col]}</td>)}
              </tr>
            )) 
            }
            </tbody>
            </table>
        </div>
    )
}

export default DataTable;