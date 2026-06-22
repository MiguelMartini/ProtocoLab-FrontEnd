import { Pencil } from "lucide-react";

export default function UserCard({
  user,

}) {

  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
          {user.name.charAt(0)}
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900">
              {user.name}
            </h3>

            <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
              Você
            </span>
          </div>

          <p className="text-gray-500">
            {user.email}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-gray-900">{user.role}</p>
          <p className="text-gray-500">{user.department}</p>
        </div>
      </div>
    </div>
  );
}