import CollaboratorCard from "./CollaboratorCard"
import CollaboratorSearch from "./CollaboratorSearch"
import CollaboratorsHeader from "./CollaboratorsHeader"

const collaborators = [
  {
    id: 1,
    name: "Miguel",
    email: "miguel@protocolab.com",
    cargo: "Analista de TI",
    departamento: "Desenvolvimento"
  },
  {
    id: 2,
    name: "vitor",
    email: "vitor@protocolab.com",
    cargo: "Analista de Infra",
    departamento: "Infraestrutura"
  },
  {
    id: 3,
    name: "Carol",
    email: "carol@protocolab.com",
    cargo: "Analista de Dados",
    departamento: "Ciência de dados"
  }
]

function CollaboratorsFeature() {
  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
        <CollaboratorsHeader/>
        <CollaboratorSearch/>
        <div className="mt-6 space-y-4">
          {collaborators.map((collaborator) => (
            <CollaboratorCard 
              key={collaborator.id} 
              user={collaborator}/>
          ))}
        </div>
    </div>
  )
}

export default CollaboratorsFeature