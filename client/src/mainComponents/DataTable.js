import React from 'react';


const DataTable = (tableData) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  //console.log(Object.keys(tableData.tableData[0]))
  return (
    <div className="text-sm overflow-y-auto max-h-full text-gray-200">
      <table className="border border-green-800 text-right">
        <thead>

          <tr>
            {
              Object.keys(tableData.tableData[0]).map((item) =>
                <th className="border border-green-600 bg-green-800 p-1 text-center">{item}</th>)
            }
          </tr>
        </thead>
        <tbody>

          {tableData.tableData.map((item) => (
            <tr>
              {
                Object.keys(tableData.tableData[0]).map((col) => {
                  if (item[col] === undefined) item[col] = 0;
                  if (col === "year" || col === "offense_code" || col === "offense_name") {
                    return <td className="border border-green-800 px-1">{item[col]}</td>
                  }
                  return <td className="border border-green-800 px-1">{numberWithCommas(item[col])}</td>

                })

              }
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default DataTable;