"use client"
import React, { useState } from "react";
import { useTable, useSortBy, useFilters, usePagination, useGlobalFilter } from "react-table";
import EmployeeForm from "../components/DataForm";
import DataTable from "../components/DataTable";

const Home = () => {
  const [data, setData] = useState([
    { EID: 1, FirstName: "John", LastName: "Smith", Email: "John@example.com", PhoneNumber: "1234567890", Salary: 50000, Country: "USA", DepartmentName: "IT" },
    { EID: 2, FirstName: "Jane", LastName: "Mathew", Email: "Jane@example.com", PhoneNumber: "9876543210", Salary: 60000, Country: "Canada", DepartmentName: "HR" },
    { EID: 3, FirstName: "Adam", LastName: "Zampe", Email: "Adam@example.com", PhoneNumber: "9876543215", Salary: 70000, Country: "India", DepartmentName: "FINANCE" },
    { EID: 4, FirstName: "Chris", LastName: "Gayle", Email: "Chris@example.com", PhoneNumber: "9876543212", Salary: 55000, Country: "Australia", DepartmentName: "IT" },
    { EID: 5, FirstName: "David", LastName: "Warner", Email: "David@example.com", PhoneNumber: "9876543213", Salary: 45000, Country: "Canada", DepartmentName: "ACCOUNT" },
  ]);

  const columns = React.useMemo(
    () => [
      { Header: "EID", accessor: "EID", align: "left" },
      { Header: "First Name", accessor: "FirstName" },
      { Header: "Last Name", accessor: "LastName" },
      { Header: "Email", accessor: "Email" },
      { Header: "Phone Number", accessor: "PhoneNumber", align: "left" },
      { Header: "Salary", accessor: "Salary", align: "left" },
      { Header: "Country", accessor: "Country" },
      { Header: "Department Name", accessor: "DepartmentName" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    state,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 3 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const { pageIndex, pageSize, globalFilter } = state;

  const handleAddEntry = (entry) => {
    setData([...data, entry]);
  };

  return (
    <div className="container mx-auto p-2 flex flex-col h-screen">
      <div className="mb-[30px] border-black border rounded-lg p-2">
        <EmployeeForm onAddEntry={handleAddEntry} />
      </div>
      <div className="flex-1 overflow-auto">
        <h2 className="text-xl font-semibold text-center">Employee Table</h2>
        <DataTable
          columns={columns}
          data={data}
          getTableProps={getTableProps}
          getTableBodyProps={getTableBodyProps}
          headerGroups={headerGroups}
          prepareRow={prepareRow}
          page={page}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          pageIndex={pageIndex}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </div>
      
    </div>
  );
};

export default Home;
