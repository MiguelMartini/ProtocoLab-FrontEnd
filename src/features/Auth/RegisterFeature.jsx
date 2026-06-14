import React from 'react'
import { Link } from 'react-router-dom'
import AuthInput from '../../components/AuthInput'
import Logo from '../../components/Logo'

function RegisterFeature() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[500px] p-8 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-center mb-4">
          <Logo />
        </div>

        <div className="text-center mb-4">
          <span className="text-[#495CCC] font-semibold text-md">
            Chamados internos, organizados de ponta a ponta.
          </span>
        </div>
        <div className="border-t border-[#4357CB]/30 mt-2 pt-8"></div>
        <form className="flex flex-col gap-4">
          <AuthInput
            label="E-mail corporativo"
            type="email"
            placeholder="email@corporativo.com"
          />

          <AuthInput
            label="CNPJ"
            type="password"
            placeholder="Digite o CNPJ da empresa"
          />

          <AuthInput
            label="Nome da empresa"
            type="text"
            placeholder="Digite o nome da empresa"
          />

          <AuthInput
            label="Colaborador"
            type="text"
            placeholder="Nome completo"
          />


          <AuthInput
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
          />

          <AuthInput
            label="Confirmar senha"
            type="password"
            placeholder="Confirme sua senha"
          />

          <button className="bg-[#4357CB] text-white p-3 rounded-lg font-bold text-md hover:bg-[#3647b3] transition cursor-pointer">
            Registrar Empresa
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>
           Já possui Login?{" "}
            <Link
              to="/"
              className="text-[#495CCC] font-medium hover:underline"
            >
              Entrar
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RegisterFeature