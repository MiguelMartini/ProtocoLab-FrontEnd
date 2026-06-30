import { useTranslation } from "react-i18next";

function StoreForm() {
  const { t } = useTranslation();
  const departments = [
    { id: 1, name: "TI" },
    { id: 2, name: "Financeiro" },
    { id: 3, name: "RH" },
    { id: 4, name: "Infraestrutura" },
  ];

  return (
    <div className="w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <form className="space-y-6">
        <div>
          <label className="mb-2 block text-lg font-medium text-gray-900">
            {t("tickets.title")}
          </label>

          <input
            type="text"
            placeholder={t("tickets.titlePh")}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-lg font-medium text-gray-900">
            {t("tickets.desc")}
          </label>

          <textarea
            rows={5}
            placeholder={t("tickets.descPh")}
            className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div>

        <div className="flex gap-6">
          <div className="flex-1">
            <label className="mb-2 block text-lg font-medium text-gray-900">
              {t("tickets.department")}
            </label>

            <select
              defaultValue=""
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
            >
              <option value="" disabled>
                {t("tickets.departmentPh")}
              </option>

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
              defaultValue="NORMAL"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
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
            className="rounded-xl bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-md transition hover:bg-indigo-700"
          >
           {t("tickets.addBtn")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default StoreForm;
