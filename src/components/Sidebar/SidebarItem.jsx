import { NavLink } from 'react-router-dom'

function SidebarItem({ to, icon: Icon, children }) {
  return (
     <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors
        ${
          isActive
            ? "bg-indigo-100 text-indigo-600"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      <Icon size={18} />
      <span>{children}</span>
    </NavLink>
  )
}

export default SidebarItem