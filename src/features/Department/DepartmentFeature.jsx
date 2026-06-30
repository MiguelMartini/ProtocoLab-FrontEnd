import { useEffect, useState } from "react";
import DepartmentCard from "./DepartmentCard";
import DepartmentHeader from "./DepartmentHeader";
import { createDepartment, getDepartments } from "@/api/department.api";
import { deleteDepartment, updateDepartment } from "@/api/department.api";

function DepartmentFeature() {
  const [departments, setDepartments] = useState([]);

  const [newDepartment, setNewDepartment] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    async function loadDepartments() {
      try {
        const data = await getDepartments();
        setDepartments(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadDepartments();
  }, []);

  async function handleAddDepartment() {
    if (!newDepartment.trim() || !newDescription.trim()) {
      return;
    }

    try {
      const department = await createDepartment({
        name: newDepartment,
        description: newDescription,
      });

      setDepartments((prev) => [...prev, department]);

      setNewDepartment("");
      setNewDescription("");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteDepartment(id) {
    try {
      await deleteDepartment(id);

      setDepartments((prev) =>
        prev.filter((department) => department.id !== id),
      );
    } catch (error) {
      console.error(error);
    }
  }
  async function handleUpdateDepartment(id, data) {
    try {
      await updateDepartment(id, data);

      setDepartments((prev) =>
        prev.map((department) =>
          department.id === id ? { ...department, ...data } : department,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
      <DepartmentHeader />
      <DepartmentCard
        departments={departments}
        onDelete={handleDeleteDepartment}
        onUpdate={handleUpdateDepartment}
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
