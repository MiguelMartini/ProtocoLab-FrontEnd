function TicketSelect({ label, value, options }) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm uppercase text-gray-500">
        {label}
      </label>

      <select
        className="w-full rounded-xl border p-3"
        defaultValue={value}
      >
        {options.map((option) => (
          <option className="rounded-xl" key={option.id} value={option.nome}>
            {option.nome}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TicketSelect;
