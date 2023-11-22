import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { nanoid } from "nanoid";

export interface Column<T> {
  header: string;
  accessor: (row: T) => string | number;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
}

const DataTable = <T,>({ data, columns }: DataTableProps<T>) => {
  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column.header}>{column.header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <Tr key={nanoid()}>
              {columns.map((column) => (
                <Td key={column.header}>{column.accessor(row)}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default DataTable;
