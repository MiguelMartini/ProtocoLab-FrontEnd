import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthInput from "../../components/AuthInput";
import Logo from "../../components/Logo";
import { useTranslation } from "react-i18next";
import { registerUser } from "@/api/user.api";

function RegisterFeature() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    companyName: "",
    companyEmail: "",
    cnpj: "",
    employeeName: "",
    password: "",
    confirmPassword: "",
  });

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
      setLoading(true);

      await registerUser(form);

      // Futuramente você pode mostrar um toast aqui

      navigate("/");
    } catch (error) {
      console.error(error);

      // Futuramente pode tratar o erro retornado pela API
      alert("Erro ao cadastrar empresa.");
    } finally {
      setLoading(false);
    }
  }
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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <AuthInput
            label={t("registerPage.email")}
            type="email"
            name="companyEmail"
            value={form.companyEmail}
            onChange={handleChange}
            placeholder={t("registerPage.emailPh")}
          />

          <AuthInput
            label={t("registerPage.enterpriseCnjp")}
            type="text"
            name="cnpj"
            value={form.cnpj}
            onChange={handleChange}
            placeholder={t("registerPage.enterpriseCnjpPh")}
          />

          <AuthInput
            label={t("registerPage.enterpriseName")}
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder={t("registerPage.enterpriseNamePh")}
          />

          <AuthInput
            label={t("registerPage.collaborator")}
            type="text"
            name="employeeName"
            value={form.employeeName}
            onChange={handleChange}
            placeholder={t("registerPage.collaboratorNamePh")}
          />

          <AuthInput
            label={t("registerPage.pass")}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder={t("registerPage.passPh")}
          />

          <AuthInput
            label={t("registerPage.confirmPass")}
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder={t("registerPage.confirmPassPh")}
          />

          <button
            type="submit"
            className="bg-[#4357CB] text-white p-3 rounded-lg font-bold text-md hover:bg-[#3647b3] transition cursor-pointer"
          >
            {t("registerPage.registerBtn")}
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>
            {t("registerPage.account")}{" "}
            <Link to="/" className="text-[#495CCC] font-medium hover:underline">
              {t("registerPage.enter")}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RegisterFeature;
