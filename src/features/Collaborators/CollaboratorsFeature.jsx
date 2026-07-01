import { useEffect, useState } from "react";
import CollaboratorCard from "./CollaboratorCard"
import CollaboratorSearch from "./CollaboratorSearch"
import CollaboratorsHeader from "./CollaboratorsHeader"
import CollaboratorModal from "./Components/CollaboratorModal";
import { getCollaborators } from "@/api/collaborator.api";
import { getDepartments } from "@/api/department.api";

function CollaboratorsFeature() {
  const [selectedUser, setSelectedUser] = useState(null);
  // const [departments, setDepartments] = useState([]);
  const [collaborators, setCollaborators] = useState([]);

   useEffect(() => {
    async function loadData() {
      try {
        const [collaboratorsData, departmentsData] = await Promise.all([
          getCollaborators(),
          getDepartments(),
        ]);

        const collaboratorsWithDepartment = collaboratorsData.map(
          (collaborator) => {
            const department = departmentsData.find(
              (dep) => dep.id === collaborator.departmentId
            );

            return {
              ...collaborator,
              department,
            };
          }
        );

        setCollaborators(collaboratorsWithDepartment);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);

    
// console.log(collaborators)
// console.log(departments)
  function handleOpenModal(user) {
    setSelectedUser(user);
  }

  function handleCloseModal() {
    setSelectedUser(null);
  }

  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
      <CollaboratorsHeader />
      <CollaboratorSearch />

      <div className="mt-6 space-y-4">
        {collaborators.map((collaborator) => (
          <CollaboratorCard
            key={collaborator.id}
            collaborator={collaborator}
            onClick={() => handleOpenModal(collaborator)}
          />
        ))}
      </div>

      <CollaboratorModal
        user={selectedUser}
        isOpen={!!selectedUser}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default CollaboratorsFeature