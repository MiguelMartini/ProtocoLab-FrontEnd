import DeleteBtn from "@/components/DeleteBtn";
import { useEffect, useState } from "react";


function DepartmentModal({ user, isOpen, onClose }) {
    const [form, setForm] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (user) {
      setForm(user);
    }
  }, [user]);

  if (!isOpen) return null;

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);

    onClose();
  }

  function handleDelete() {
    console.log("Deletando departamento");
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-[500px] rounded-xl bg-white p-6">
        <h2 className="mb-5 text-xl font-bold">
          Editar departamento
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <span className="text-md text-gray-500">
              Nome do departamento:
            </span>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nome"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-md text-gray-500">
              Descrição:
            </span>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="Descrição do departamento"
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>

          <div className="flex justify-between">
            <DeleteBtn msg={"Deseja excluir este departamento?"} alertMsg={"Esta ação não poderá ser desfeita."} onDelete={handleDelete} />

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer rounded-lg border px-4 py-2"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DepartmentModal