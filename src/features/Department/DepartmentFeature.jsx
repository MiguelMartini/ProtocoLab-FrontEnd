import DepartmentCard from "./DepartmentCard"
import DepartmentHeader from "./DepartmentHeader"


function DepartmentFeature() {
 
  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
        <DepartmentHeader/>
        <DepartmentCard/>
    </div>
  )
}

export default DepartmentFeature