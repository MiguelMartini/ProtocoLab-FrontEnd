import DeleteBtn from "@/components/DeleteBtn";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function DepartmentModal({ user, isOpen, onClose, onDelete, onUpdate }) {
  const { t } = useTranslation();
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

  async function handleSubmit(e) {
  e.preventDefault();

  try {
    await onUpdate(user.id, {
      name: form.name,
      description: form.description,
    });

    onClose();
  } catch (err) {
    console.error(err);
  }
}

 async function handleDelete() {
  try {
    await onDelete(user.id);
    onClose();
  } catch (err) {
    console.error(err);
  }
}
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-[500px] rounded-xl bg-white p-6">
        <h2 className="mb-5 text-xl font-bold">{t("department.editHeader")}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <span className="text-md text-gray-500">{t("department.editName")}</span>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("department.editNamePh")}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-md text-gray-500">{t("department.editDesc")}</span>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder={t("department.editDescPh")}
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-indigo-500 focus:bg-white"
            />
          </div>

          <div className="flex justify-between">
            <DeleteBtn
              msg={t("department.delHeader")}
              alertMsg={t("department.delMsg")}
              onDelete={handleDelete}
            />

            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer rounded-lg border px-4 py-2"
              >
                {t("department.cancelBtn")}
              </button>

              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                {t("department.saveBtn")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DepartmentModal;
