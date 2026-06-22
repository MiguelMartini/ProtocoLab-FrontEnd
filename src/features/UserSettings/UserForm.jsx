import { UserRound } from "lucide-react";

function UserForm() {
  return (
    <div className="w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center gap-3">
        <UserRound size={20} className="text-indigo-600" />
        <h2 className="text-2xl font-semibold text-gray-900">Meu perfil</h2>
      </div>

      <form className="space-y-6">
        <div>
          <label className="mb-2 block text-lg font-medium text-gray-900">
            Nome
          </label>

          <input
            type="text"
            defaultValue="Miguel"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-lg font-medium text-gray-900">
            E-mail
          </label>

          <input
            type="email"
            defaultValue="miguel@protocolab.com"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-lg font-medium text-gray-900">
            Cargo
          </label>

          <input
            type="text"
            placeholder="Ex.: Analista de TI"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="rounded-xl bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-md transition hover:bg-indigo-700"
          >
            Salvar perfil
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
