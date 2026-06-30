import { ArrowLeftIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'

function VoltarBtn({route}) {
  const { t } = useTranslation();
  return (
    <div>
        <NavLink
        to={route}
        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all duration-200 hover:text-gray-700 mb-5"
      >
        <ArrowLeftIcon size={18} />
        <span className="font-medium">{t("backBtn.backBtn")}</span>
      </NavLink>
    </div>
  )
}

export default VoltarBtn