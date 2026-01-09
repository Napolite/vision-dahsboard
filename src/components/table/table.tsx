import Header from "./header";
import DataCells from "./datacells";

function Table({
  headers,
  data,
}: {
  headers: { label: string; width: string }[];
  data: {
    width: string;
    label?: string | number | any;
    value?: string | number | any;
    progress?: number;
  }[][];
}) {
  return (
    <div>
      <Header headers={[...headers]} />
      {data?.map((dat) => (
        <DataCells data={dat} />
      ))}
    </div>
  );
}

export default Table;
