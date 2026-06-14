import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout