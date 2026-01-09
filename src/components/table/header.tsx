function Header({ headers }: { headers: { label: string; width: string }[] }) {
  return (
    <div className="flex w-[100%] border-b-[1px] border-b-solid border-b-[#56577A] py-[20px]">
      {headers?.map((header) => (
        <div
          className="text-[10px] text-gray-400"
          style={{ width: header?.width }}
        >
          {header?.label}
        </div>
      ))}
    </div>
  );
}

export default Header;
