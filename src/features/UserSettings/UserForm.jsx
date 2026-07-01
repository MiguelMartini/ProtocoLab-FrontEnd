import { editUser } from "@/api/user.api";
import { useAuth } from "@/hooks/useAuth";
import { UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

function UserForm() {
  const { t } = useTranslation();
  const { user, setUser } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name,
        email: user.email,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = await editUser(user.id, form);

      setUser(updatedUser.user);

      setForm({
        name: updatedUser.name,
        email: updatedUser.email,
      });

      toast.success("Perfil atualizado com sucesso!")
    } catch (error) {
      console.error(error);
      toast.error("Erro ao atualizar perfil.")
    }
  };

  return (
    <div className="w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center gap-3">
        <UserRound size={20} className="text-indigo-600" />
        <h2 className="text-2xl font-semibold text-gray-900">
          {t("settings.title")}
        </h2>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-lg font-medium text-gray-900">
            {t("settings.name")}
          </label>

          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-lg font-medium text-gray-900">
            {t("settings.email")}
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div>

        {/* <div>
          <label className="mb-2 block text-lg font-medium text-gray-900">
            {t("settings.role")}
          </label>

          <input
            type="text"
            value={user.role}
            placeholder={t("settings.rolePlaceholder")}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div> */}

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="rounded-xl bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-md transition hover:bg-indigo-700"
          >
            {t("settings.saveProfile")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
