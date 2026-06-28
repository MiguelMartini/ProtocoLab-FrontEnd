import VoltarBtn from "@/components/VoltarBtn"
import StoreCollaboratorFeature from "./StoreCollaboratorFeature"

function StoreCollaborator() {
  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
        <VoltarBtn route={"/collaborators"}/>
        <StoreCollaboratorFeature/>
    </div>
  )
}

export default StoreCollaborator