import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

interface DataTableProps {
  data: any;
  column: string[];
}

const DataTable = ({ data, column }: DataTableProps) => {
  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            {column.map((col, index) => (
              <Th key={index}>{col}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((item: any, index: number) => (
            <Tr key={index}>
              {column.map((col, index) => (
                <Td key={index}>{item[col]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>

      </Table>
    </>
  );
};

export default DataTable;
