function StoreForm() {
  const departments = [
    { id: 1, name: "TI" },
    { id: 2, name: "Financeiro" },
    { id: 3, name: "RH" },
    { id: 4, name: "Infraestrutura" },
  ];

  return (
    <div className="w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <form className="space-y-6">
        {/* Título */}
        <div>
          <label className="mb-2 block text-lg font-medium text-gray-900">
            Título
          </label>

          <input
            type="text"
            placeholder="Ex.: Computador não liga"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div>

        {/* Descrição */}
        <div>
          <label className="mb-2 block text-lg font-medium text-gray-900">
            Descrição
          </label>

          <textarea
            rows={5}
            placeholder="Descreva detalhadamente o problema..."
            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div>

        {/* Departamento */}
        <div className="flex gap-6">
          {/* Departamento */}
          <div className="flex-1">
            <label className="mb-2 block text-lg font-medium text-gray-900">
              Departamento
            </label>

            <select
              defaultValue=""
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
            >
              <option value="" disabled>
                Selecione o departamento
              </option>

              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>

          {/* Prioridade */}
          <div className="flex-1">
            <label className="mb-2 block text-lg font-medium text-gray-900">
              Prioridade
            </label>

            <select
              defaultValue="NORMAL"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
            >
              <option value="HIGH">Alta</option>
              <option value="NORMAL">Média</option>
              <option value="LOW">Baixa</option>
            </select>
          </div>
        </div>

        {/* Botão */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="rounded-xl bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-md transition hover:bg-indigo-700"
          >
            Abrir Ticket
          </button>
        </div>
      </form>
    </div>
  );
}

export default StoreForm;
