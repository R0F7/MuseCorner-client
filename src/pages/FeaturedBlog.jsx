import { useQuery } from "@tanstack/react-query";
import { createColumnHelper, getCoreRowModel, useReactTable, flexRender, getPaginationRowModel } from "@tanstack/react-table";

import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

const FeaturedBlog = () => {
    // const USERS = useLoaderData();
    // console.log(USERS);
    const { isPending, isError, error, data: USERS = [] } = useQuery({
        queryKey: ['FeaturedBlog'],
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_API_URL}/blog-sorting`);
            return res.data;
        },
    })

    const [data, setData] = useState([]);

    useEffect(() => {
        const copiedData = [...USERS];
        const sortedData = copiedData.sort((a, b) => b.long_description.length - a.long_description.length);
        setData(sortedData); //
        // setData(copiedData)
    }, [USERS]);

    const [sortBy, setSortBy] = useState({});
    const columnHelper = createColumnHelper()

    const columns = [

        columnHelper.accessor("", {
            id: "S.No",
            cell: (info) => <span>{info.row.index + 1}</span>,
            header: "S.No",
        }),

        columnHelper.accessor("user_image", {
            cell: (info) => (
                <img src={info.getValue()} alt="" className="rounded-full w-10 h-10 object-cover" />
            ),
            header: "Profile"
        }),

        columnHelper.accessor("title", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: 'Title',
        }),

        columnHelper.accessor("user_name", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: 'Blog Owner',
        }),
    ]

    const sortedData = React.useMemo(() => {
        if (!sortBy.columnId) {
            return data;
        }

        const sorted = [...data].slice(0, 10).sort((a, b) => {
            const aValue = a[sortBy.columnId]
            const bValue = b[sortBy.columnId]

            if (aValue === bValue) {
                return 0;
            }

            return sortBy.desc ? (aValue > bValue ? -1 : 1) : (aValue > bValue ? 1 : -1);
        });

        return sorted;
    }, [data, sortBy]);

    const table = useReactTable(
        {
            data: sortedData,
            columns,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel(),
        }
    );

    const handleSort = (columnId) => {
        setSortBy((prevSortBy) => ({
            columnId,
            desc: prevSortBy.columnId === columnId ? !prevSortBy.desc : false,
        }));
    };

    // console.log(data);

    if (isPending) {
        return <span>Pending...</span>
    }

    if (isError) {
        return <span>{error.message}</span>
    }

    return (
        <div className='pt-4 min-h-[100vh-350px] bg-gra-900 mb-6 lg:my-12'>
            <div className='p-2 w-full lg:max-w-7xl mx-auto text-white fill-gray-400'>
                <table className="border border-gray-700 w-full text-left">
                    <thead className="bg-indigo-60 bg-[#14456A]">
                        {
                            table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {
                                        headerGroup.headers.map((header) => (
                                            <th
                                                key={header.id}
                                                onClick={() => handleSort(header.id)}
                                                className="capitalize px-3.5 py-2 lg:py-2.5 cursor-pointer"
                                            >
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                                {sortBy.columnId === header.id && (
                                                    sortBy.desc ? ' 🔽' : ' 🔼'
                                                )}
                                            </th>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody>
                        {
                            table.getRowModel().rows.length ? (
                                table.getRowModel().rows.map((row, i) => (
                                    <tr
                                        key={row.id}
                                        className={`${i % 2 === 0 ? 'text-gray-900 bg-gray-300' : 'bg-gray-800'}`}
                                    >
                                        {
                                            row.getVisibleCells().map((cell) => (
                                                <td key={cell.id} className="px-3.5 py-2">
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            ) : null
                        }
                    </tbody>
                </table>

                {/* Pagination and page size controls */}
                {/* <div className="flex items-center justify-end text-black mt-2 gap-2">
                    <button
                        onClick={() => {
                            table.previousPage()
                        }}
                        disabled={!table.getCanPreviousPage()}
                        className="p-1 border border-gray-300 px-2 disabled:opacity-30">
                        {"<"}
                    </button>
                    <button
                        onClick={() => {
                            table.nextPage()
                        }}
                        disabled={!table.getCanNextPage()}
                        className="p-1 border border-gray-300 px-2 disabled:opacity-30">
                        {">"}
                    </button>
                    <span className="flex items-center gap-1">
                        <div>Page</div>
                        <strong>{table.getState().pagination.pageIndex + 1} of{" "}
                            {table.getPageCount()}
                        </strong>
                    </span>
                    <span className="flex items-center gap-1">
                        | Go to page:
                        <input type="number"
                            defaultValue={table.getState().pagination.pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                table.setPageIndex(page)
                            }}
                            className="border p-1 rounded w-16 bg-transparent"
                        />
                    </span>

                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                            table.setPageSize(Number(e.target.value));
                        }}
                        className="h-9 text-xs bg-transparent"
                    >
                        {
                            [10, 20, 30, 50].map((pageSize) => (

                                <option key={pageSize} value={pageSize}>{pageSize}</option>

                            ))
                        }
                    </select>
                </div> */}

            </div>
        </div>
    );

};

export default FeaturedBlog;