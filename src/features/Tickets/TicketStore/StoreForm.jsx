import { getDepartments } from "@/api/department.api";
import { postTicket } from "@/api/tickets.api";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function StoreForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [departments, setDepartments] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    departmentId: "",
    priority: "NORMAL",
    status: "IN_PROGRESS",
  });

  useEffect(() => {
    async function loadDepartments() {
      try {
        const data = await getDepartments();
        setDepartments(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadDepartments();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const newTicket = await postTicket({
        ...form,
        departmentId: Number(form.departmentId),
      });

      toast.success(t("tickets.created"));

      setForm({
        title: "",
        description: "",
        departmentId: "",
        priority: "NORMAL",
      });

      navigate("/tickets")
    } catch (error) {
      console.error(error);
      toast.error(t("tickets.error"));
    }
  }

  return (
    <div className="w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-lg font-medium text-gray-900">
            {t("tickets.title")}
          </label>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            type="text"
            placeholder={t("tickets.titlePh")}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-lg font-medium text-gray-900">
            {t("tickets.desc")}
          </label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={5}
            placeholder={t("tickets.descPh")}
            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
          />
        </div>

        <div className="flex gap-6">
          <div className="flex-1">
            <label className="mb-2 block text-lg font-medium text-gray-900">
              {t("tickets.department")}
            </label>

            <select
              name="departmentId"
              value={form.departmentId}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
            >
              <option value="">{t("tickets.departmentPh")}</option>

              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="mb-2 block text-lg font-medium text-gray-900">
              {t("tickets.priority")}
            </label>

            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
            >
              <option value="HIGH">{t("tickets.option1")}</option>
              <option value="NORMAL">{t("tickets.option2")}</option>
              <option value="LOW">{t("tickets.option3")}</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="rounded-xl bg-indigo-600 px-6 py-3 text-white"
          >
            {t("tickets.addBtn")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default StoreForm;
