import { useTranslation } from "react-i18next";
import CollaboratorBtn from "./CollaboratorBtn"

function CollaboratorsHeader() {
  const { t } = useTranslation();
  return (
    <div className="mb-8 flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-900">{t("collaborator.sidebar")}</h1>
        <p className="text-xl text-slate-600">
          {t("collaborator.headerMsg")}
        </p>
      </div>
      <div className="w-3xs">
        <CollaboratorBtn/>
      </div>
    </div>
  )
}

export default CollaboratorsHeader