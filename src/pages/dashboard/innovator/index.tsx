"use client";

import * as React from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import Leeshaun from "@/assets/images/Lee Shaun.png";
import WilsonSmith from "@/assets/images/Wilson Smith.png";
import EmilyCoen from "@/assets/images/Emily Coen.png";
import GragoryStan from "@/assets/images/Gragory Stan.png";
import VivienJess from "@/assets/images/Vivien Jess.png";
// import Table from "@/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

//   import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
//   import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    riskscore: "Low risk",
    innovatorname: "Lee Shaun",
    projects: ["Projectname"],
    image: Leeshaun,
  },
  {
    id: "3u1reuv4",
    riskscore: "High risk",
    innovatorname: "Wilson Smith",
    projects: ["Projectname","Projectname","Projectname","Projectname"],
    
    image: WilsonSmith,
  },
  {
    id: "derv1ws0",
    riskscore: "Medium risk",
    innovatorname: "Emily Coen",
    projects: ["Projectname","Projectname"],
    image: EmilyCoen,
  },
  {
    id: "5kma53ae",
    riskscore: "Low risk",
    innovatorname: "Gragory Stan",
    projects:[ "Projectname"],
    image: GragoryStan,
  },
  {
    id: "bhqecj4p",
    riskscore: "High risk",
    innovatorname: "Vivien Jess",
    projects: ["Projectname"],
    image: VivienJess,
  },
];

export type Payment = {
  id: string;
  riskscore: any;
  innovatorname: string;
  projects: any;
  image: any;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "innovatorname",
    header: "Innovator’s name",
    cell: ({ row }) => (
      <div className="capitalize flex gap-2 items-center">
        <img
          src={row.original.image}
          alt="Innovator Image"
          className="w-8 h-8 rounded-full"
        />
        <div className="underline font-bold">
          {row.getValue("innovatorname")}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "projects",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Projects
          <ArrowUpDown className=" h-4 w-4" />
        </Button>
      );
    },
    cell: () => (
      { data.projects.map(({item}:{item:any})=>
      <div className="lowercase">{item}</div>)}
       
    ),
  },
  {
    accessorKey: "riskscore",
    header: () => <div className="text-center">Risk score</div>,
    cell: () => {
      // const riskscore = parseFloat(row.getValue("riskscore"))

      // Format the riskscore as a dollar riskscore
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(riskscore)

      return (
        <div className="flex flex-col gap-1">
          {data.map((item, Index) => (
            <div className="w-full flex justify-between items-center">
              <Badge
                key={Index}
                variant={
                  item.riskscore === "Low risk"
                    ? "info"
                    : item.riskscore === "Medium risk"
                    ? "success"
                    : item.riskscore === "High risk"
                    ? "destructive"
                    : "outline"
                }
              >
                {item.riskscore}
              </Badge>
              <Button variant="outline">View Dashboard</Button>
            </div>
          ))}
        </div>
      );
    },

    //
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// const data = [
//   {
//     name: "Lee Shaun",
//     image: Leeshaun,
//     projects: ["Project name"],
//     risks: ["Medium risk"],
//   },
//   {
//     name: "Wilson Smith",
//     image: WilsonSmith,
//     projects: ["Project name", "Project name", "Project name", "Project name"],
//     risks: ["Medium risk", "Low risk", "High risk", "Medium risk"],
//   },
//   {
//     name: "Emily Coen",
//     image: EmilyCoen,
//     projects: ["Project name", "Project name"],
//     risks: ["High risk", "Low risk"],
//   },
//   {
//     name: "Gragory Stan",
//     image: GragoryStan,
//     projects: ["Project name"],
//     risks: ["Medium risk"],
//   },

//   {
//     name: "Vivien Jess",
//     image: VivienJess,
//     projects: ["Project name"],
//     risks: ["Low risk"],
//   },
// ];

const InnovatorPage = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button variant="dark" size="sm">
            Innovators
          </Button>
          <Button variant="outline" size="sm">
            Work with
          </Button>
        </div>
        <div>
          <Input />
        </div>
      </div>

      <div className="border border-border rounded-lg overflow-auto">
        {/* <Table /> */}
        <div className="w-full">
          <div className="flex items-center p-4">
            <Input
              placeholder="Filter projects..."
              value={
                (table.getColumn("projects")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("projects")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 p-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            {/* <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovatorPage;
