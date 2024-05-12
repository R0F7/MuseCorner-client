import { createColumnHelper, getCoreRowModel, useReactTable, flexRender } from "@tanstack/react-table";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const FeaturedBlog = () => {
    const USERS = useLoaderData();
    // console.log(USERS);

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

    const [data] = useState(() => [...USERS.slice(0,10)])
    data.sort((a,b) => b.long_description.length - a.long_description.length);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <div className='pt-4 min-h-[100vh-350px] bg-gra-900 my-12'>
            <div className='p-2 w-full lg:max-w-7xl mx-auto text-white fill-gray-400'>
                <table className="border border-gray-700 w-full text-left">
                    <thead className="bg-indigo-60 bg-[#14456A]">
                        {
                            table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {
                                        headerGroup.headers.map((header) => (
                                            <th key={header.id} className="capitalize px-3.5 py-2 lg:py-2.5">
                                                {flexRender(header.column.columnDef.header, header.getContext())}
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
                                    <tr key={row.id} className={`${i % 2 === 0 ? 'text-gray-900 bg-gray-300' : 'bg-gray-800'}`}>
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
            </div>
        </div>
    );
};

export default FeaturedBlog;