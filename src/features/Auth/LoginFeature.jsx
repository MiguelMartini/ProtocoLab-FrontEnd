import { Link } from "react-router-dom";
import AuthInput from "../../components/AuthInput";
import Logo from "../../components/Logo";
import { useTranslation } from "react-i18next";

function LoginFeature() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[500px] p-8 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-center mb-4">
          <Logo />
        </div>

        <div className="text-center mb-4">
          <span className="text-[#495CCC] font-semibold text-md">
            {t("loginPage.headerMsg")}
          </span>
        </div>
        <div className="border-t border-[#4357CB]/30 mt-2 pt-8"></div>
        <form className="flex flex-col gap-4">
          <AuthInput
            label={t("loginPage.email")}
            type="email"
            placeholder={t("loginPage.emailPh")}
          />

          <AuthInput
            label={t("loginPage.collaborator")}
            type="text"
            placeholder={t("loginPage.collaboratorNamePh")}
          />

          <AuthInput
            label={t("loginPage.pass")}
            type="password"
            placeholder={t("loginPage.passPh")}
          />

          <button className="bg-[#4357CB] text-white p-3 rounded-lg font-bold text-md hover:bg-[#3647b3] transition cursor-pointer">
            {t("loginPage.loginBtn")}
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>
            {t("loginPage.account")}{" "}
            <Link
              to="/register"
              className="text-[#495CCC] font-medium hover:underline"
            >
              {t("loginPage.enterprise")}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginFeature;
