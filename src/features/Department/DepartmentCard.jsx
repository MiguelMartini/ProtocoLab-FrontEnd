import DepartmentItem from "./DepartmentItem";
import DepartmentForm from "./DepartmentForm";
import { useState } from "react";
import DepartmentModal from "./components/DepartmentModal";
import { useTranslation } from "react-i18next";

function DepartmentCard({
  departments,
  onAdd,
  newDepartment,
  newDescription,
  setNewDepartment,
  setNewDescription,
}) {
  const { t } = useTranslation();
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  function handleOpenModal(department) {
    setSelectedDepartment(department);
  }

  function handleCloseModal() {
    setSelectedDepartment(null);
  }

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        {t("department.sidebar")}
      </h2>

      <div className="space-y-4">
        {departments.map((department, index) => (
          <DepartmentItem
            key={index}
            department={department}
            onClick={() => handleOpenModal(department)}
          />
        ))}

        <DepartmentForm
          newDepartment={newDepartment}
          newDescription={newDescription}
          setNewDepartment={setNewDepartment}
          setNewDescription={setNewDescription}
          onAdd={onAdd}
        />
      </div>
      <DepartmentModal
        user={selectedDepartment}
        isOpen={!!selectedDepartment}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default DepartmentCard;
