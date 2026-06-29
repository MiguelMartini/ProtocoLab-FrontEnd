import VoltarBtn from "@/components/VoltarBtn"
import StoreHeader from "./StoreHeader"
import StoreForm from "./StoreForm"

function TicketStoreFeature() {
  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
      <VoltarBtn route={"/tickets"}/>
      <StoreHeader/>
      <StoreForm/>
    </div>
  )
}

export default TicketStoreFeature