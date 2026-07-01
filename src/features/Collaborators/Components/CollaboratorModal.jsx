import { useEffect, useState } from "react";
import Select from "./Select";
import DeleteBtn from "@/components/DeleteBtn";
import { editUser } from "@/api/user.api";
import { toast } from "sonner";

function CollaboratorModal({ user, isOpen, onClose, onUpdate }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    departmentId: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        role: user.role || "",
        departmentId: user.departmentId || "",
      });
    }
  }, [user]);

  if (!isOpen) return null;

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const updatedUser = await editUser(user.id, form);

      onUpdate(updatedUser);

      onClose();
    } catch (error) {
      toast.error("Erro. o Nome deve conter apenas espaços e letras")
      console.error(error);
    }
  }
  const statusOptions = [
    { id: 1, nome: "TI" },
    { id: 2, nome: "Compras" },
    { id: 3, nome: "Gerencia" },
  ];

  const handleDelete = () => {
    console.log("Deletando");
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-[500px]">
        <h2 className="text-xl font-bold mb-5">Editar colaborador</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <span className="text-md text-gray-500">Nome colaborador:</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:bg-white"
              placeholder="Nome"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-md text-gray-500">E-mail colaborador:</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:bg-white"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-md text-gray-500">Cargo:</span>
            <input
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-blue-500 focus:bg-white"
              placeholder="Cargo"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Select
  label="Selecionar Departamento"
  name="departmentId"
  value={form.departmentId}
  options={statusOptions}
  onChange={handleChange}
/>
          </div>
          <div className="flex justify-between">
            <DeleteBtn
              msg={"Deseja excluir este colaborador?"}
              alertMsg={"Esta ação não poderá ser desfeita."}
              onDelete={() => handleDelete()}
            />
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-lg cursor-pointer"
              >
                Cancelar
              </button>

              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer">
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CollaboratorModal;
