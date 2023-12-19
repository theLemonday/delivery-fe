import {
    Table,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { config } from "../../../conf/config";
import { useAuth } from "../../../hooks/UseAuth";
import { Account } from "../../../models/Account";
import { GetAllWithAuthentication } from "../../../shared/action";
import { deleteAccount } from "./Actions";
import { TableHead } from "./Table";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../route";

function DeleteAccountButton({ username }: { username: string }) {
    return <button onClick={() => deleteAccount(username)}>Delete</button>;
}

function TableBody({ table }: { table: Table<Account> }) {
    return (
        <tbody>
            {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                            {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}

const columnHelper = createColumnHelper<Account>();

const columns = [
    columnHelper.accessor((row) => row.username, {
        id: "username",
    }),
    columnHelper.accessor((row) => row.email, {
        id: "email",
    }),

    columnHelper.display({
        header: () => null,
        id: "actions",
        cell: (info) => {
            return (
                <>
                    <DeleteAccountButton
                        username={info.row.getValue("username") as string}
                    />
                </>
            );
        },
    }),
];

function AccountsTable() {
    const auth = useAuth();
    const [accounts, setAccounts] = useState<Account[]>([]);

    useEffect(() => {
        (async function () {
            try {
                const data = await GetAllWithAuthentication<Account>({
                    url: `${config.protectedUrl}/accounts`,
                    token: auth.session.token,
                });
                setAccounts(data);
            } catch (error) {
                console.log(error);
            }
        })();
    });

    const table = useReactTable({
        data: accounts,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        //
        debugTable: true,
    });

    return (
        <div>
            <table>
                <TableHead table={table} />
                <TableBody table={table} />
            </table>
        </div>
    );
}

export default function ListAllAccountsPage() {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h5>Accounts List</h5>
            </div>
            <button onClick={() => navigate(RoutePath.AccountCreate)}>
                Create account
            </button>
            <AccountsTable />
        </div>
    );
}
