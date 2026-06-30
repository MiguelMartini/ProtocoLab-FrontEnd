import { useTranslation } from "react-i18next";

function DepartmentHeader() {
  const { t } = useTranslation();
  return (
    <div className="mb-8 flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-900">{t("department.sidebar")}</h1>
        <p className="text-xl text-slate-600">
          {t("department.headerMsg")}
        </p>
      </div>
    </div>
  )
}

export default DepartmentHeader