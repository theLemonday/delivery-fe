import { Table, flexRender } from "@tanstack/react-table";

export function TableHead<T>({ table }: { table: Table<T> }) {
    return (
        <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <th key={header.id}>
                            <div>
                                {header.isPlaceholder ? null : (
                                    <>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </>
                                )}
                            </div>
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
    );
}
