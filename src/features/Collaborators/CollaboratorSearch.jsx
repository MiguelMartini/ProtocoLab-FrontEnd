import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";

function CollaboratorSearch() {
  const { t } = useTranslation();
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder={t("collaborator.searchMsg")}
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-4 outline-none transition focus:border-blue-500 focus:bg-white"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700 md:w-fit cursor-pointer">
          <Search size={18} />
          {t("collaborator.searchBtn")}
        </button>
      </div>
    </div>
  );
}

export default CollaboratorSearch;
