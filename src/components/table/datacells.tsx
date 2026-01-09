function DataCells({ data }: { data: any }) {
  console.log({ data });
  return (
    <div className="flex w-[100%] border-b-[1px] border-b-solid border-b-[#56577A] py-[20px]">
      {data?.map((dat: any) => (
        <div style={{ width: dat?.width }}>{dat?.label || dat?.value}</div>
      ))}
    </div>
  );
}

export default DataCells;
