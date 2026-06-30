import React from 'react'
import { Link } from 'react-router-dom'
import AuthInput from '../../components/AuthInput'
import Logo from '../../components/Logo'
import { useTranslation } from 'react-i18next';

function RegisterFeature() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[500px] p-8 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-center mb-4">
          <Logo />
        </div>

        <div className="text-center mb-4">
          <span className="text-[#495CCC] font-semibold text-md">
            {t("registerPage.headerMsg")}
          </span>
        </div>
        <div className="border-t border-[#4357CB]/30 mt-2 pt-8"></div>
        <form className="flex flex-col gap-4">
          <AuthInput
            label={t("registerPage.email")}
            type="email"
            placeholder={t("registerPage.emailPh")}
          />

          <AuthInput
            label={t("registerPage.enterpriseCnjp")}
            type="password"
            placeholder={t("registerPage.enterpriseCnjpPh")}
          />

          <AuthInput
            label={t("registerPage.enterpriseName")}
            type="text"
            placeholder={t("registerPage.enterpriseNamePh")}
          />

          <AuthInput
            label={t("registerPage.collaborator")}
            type="text"
            placeholder={t("registerPage.collaboratorNamePh")}
          />


          <AuthInput
            label={t("registerPage.pass")}
            type="password"
            placeholder={t("registerPage.passPh")}
          />

          <AuthInput
            label={t("registerPage.confirmPass")}
            type="password"
            placeholder={t("registerPage.confirmPassPh")}
          />

          <button className="bg-[#4357CB] text-white p-3 rounded-lg font-bold text-md hover:bg-[#3647b3] transition cursor-pointer">
            {t("registerPage.registerBtn")}
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>
           {t("registerPage.account")}{" "}
            <Link
              to="/"
              className="text-[#495CCC] font-medium hover:underline"
            >
              {t("registerPage.enter")}
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RegisterFeature