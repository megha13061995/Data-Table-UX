const DataTable = ({
    columns,
    data,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    globalFilter,
    setGlobalFilter,
    pageIndex,
    pageSize,
    setPageSize
  }) => {
    return (
      <div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="p-2 border border-gray-300"
          />
        </div>
        <table {...getTableProps()} className="w-full border border-collapse">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={`p-2 bg-gray-200 ${column.align === "left" ? "text-left" : "text-right"}`}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="border-t">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className={`p-2 ${cell.column.align === "left" ? "text-left" : "text-right"}`}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-4 flex justify-between">
          <div>
            <span className="mr-2">Page {pageIndex + 1} of {pageOptions.length}</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
              className="p-2 border border-gray-300"
            >
              {[3,5,10,15,20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {">>"}
            </button>
          </div>
        </div>
      </div>
    );
  };

export default DataTable