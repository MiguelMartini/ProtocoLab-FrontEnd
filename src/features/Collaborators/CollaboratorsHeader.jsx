import CollaboratorBtn from "./CollaboratorBtn"

function CollaboratorsHeader() {
  return (
    <div className="mb-8 flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-900">Colaboradores</h1>
        <p className="text-xl text-slate-600">
          Gerencie todos os colaboradores da sua organização.
        </p>
      </div>
      <div className="w-3xs">
        <CollaboratorBtn/>
      </div>
    </div>
  )
}

export default CollaboratorsHeader