function CollaboratorCard({ collaborator, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm hover:bg-gray-100 cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
          {collaborator.name.charAt(0)}
        </div>

        <div>
          <h3 className="font-semibold">{collaborator.name}</h3>
          <p className="text-gray-500">{collaborator.email}</p>
        </div>
      </div>

      <div className="text-right">
        <div className="bg-indigo-600 rounded-md p-1">
          <p className="text-white flex justify-center p-1 text-sm">
            {collaborator.department?.name}
          </p>
        </div>

        <p>{collaborator.role}</p>
      </div>
    </div>
  );
}

export default CollaboratorCard;
