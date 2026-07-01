
function Select({ label, value, options, onChange  }) {
  return (
    <div>
      <label className="mb-2 block text-md text-gray-500">
        {label}
      </label>

      <select
        className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:bg-white text-gray-500"
        value={value}
        onChange={onChange}
      >
        <option value="">Selecione...</option>

        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.nome}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select