
function CollaboratorCard({ user }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm hover:bg-gray-100 cursor-pointer ">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
          {user.name.charAt(0)}
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900">
              {user.name}
            </h3>
          </div>

          <p className="text-gray-500">
            {user.email}
          </p>
        </div>
      </div>

      <div className="text-right">
        <div className="bg-indigo-600 flex justify-center p-1 rounded-md text-sm">
            <p className=" text-white">{user.departamento}</p>
        </div>
        <p className="text-gray-900">{user.cargo}</p>
      </div>
    </div>
  )
}

export default CollaboratorCard