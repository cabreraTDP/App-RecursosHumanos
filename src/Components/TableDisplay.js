import '../CSS/TableDisplay.css'
import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination } from 'react-table'
import React from 'react'
import {GlobalFilter, DefaultColumnFilter} from './TableUtils'
import Icon from "awesome-react-icons";
// A great library for fuzzy filtering/sorting items


const TableDisplay = (props) => {

    const { titles, rawData, options } = props;

    const data = React.useMemo(
        () => rawData,[]
      );
    
    const titlesData = Object.keys(rawData[0])

    let i = 0;
    const titlesObject = titles.map((title) => {
        let titleObj = {};
        titleObj['Header'] = title;
        titleObj['accessor'] = titlesData[i];

        i++
        return titleObj
    })

    const columns = React.useMemo(
        () => titlesObject,[]
    )
    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter,
        }),[]
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
      } = useTable(
        {
          columns,
          data,
          defaultColumn,
          initialState: { pageIndex: 0, pageSize: 8 },
        },
        useFilters, // useFilters!
        useGlobalFilter,
        useSortBy,
        usePagination
      )


    return (
        <>
        
        <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            options={options}
        />
         <div className="TableContainer">
         <table {...getTableProps()} className="Table">
           <thead >             
               <tr>
             </tr>
             {headerGroups.map(headerGroup => (
               <tr {...headerGroup.getHeaderGroupProps()}>
                 {headerGroup.headers.map(column => (
                   <th key={column.id}>
                     {column.render('Header')}
                     <Icon name="burger" size="15" {...column.getHeaderProps(column.getSortByToggleProps())}/>
                     <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                  </span>
                   </th>
                 ))}
               </tr>
             ))}

           </thead>
           <tbody {...getTableBodyProps()}>
             {page.map((row, i) => {
               prepareRow(row)
               return (
                 <tr {...row.getRowProps()}>
                   {row.cells.map(cell => {
                     return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                   })}
                 </tr>
               )
             })}
           </tbody>
         </table>

        
        <div className="pagination">
            <span className="total">
              <strong>Total: </strong>{data.length}
            </span>{'  '}
            <span class="botones">
              <button  onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
              </button>{' '}
              <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
              </button>{' '}
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
              </button>{' '}
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
              </button>{' '}
            </span>
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            
        </div>

      </div>
    </>
    )
}

export default TableDisplay