
function Select({ label, value, options }) {
  return (
     <div>
      <label className="mb-2 block text-md text-gray-500">
        {label}
      </label>

      <select
        className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:bg-white text-gray-500"
        defaultValue={value}
      >
        {options.map((option) => (
          <option className="rounded-xl" key={option.id} value={option.nome}>
            {option.nome}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select