import { useState } from "react";
import DepartmentCard from "./DepartmentCard";
import DepartmentHeader from "./DepartmentHeader";

function DepartmentFeature() {
  const [departments, setDepartments] = useState([
    {
      name: "TI",
      description: "Tecnologia da Informação",
    },
  ]);

  const [newDepartment, setNewDepartment] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function handleAddDepartment() {
    if (!newDepartment.trim() || !newDescription.trim()) return;

    setDepartments((prev) => [
      ...prev,
      {
        name: newDepartment,
        description: newDescription,
      },
    ]);

    setNewDepartment("");
    setNewDescription("");
  }

  function handleRemoveDepartment(index) {
    setDepartments((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
      <DepartmentHeader />
      <DepartmentCard
        departments={departments}
        onDelete={handleRemoveDepartment}
        onAdd={handleAddDepartment}
        newDepartment={newDepartment}
        newDescription={newDescription}
        setNewDepartment={setNewDepartment}
        setNewDescription={setNewDescription}
      />
    </div>
  );
}

export default DepartmentFeature;
