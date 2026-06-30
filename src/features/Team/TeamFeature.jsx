import UserCard from "./UserCard";
import TeamHeader from "./TeamHeader";
import { useAuth } from "@/hooks/useAuth";

function TeamFeature() {
  const { user } = useAuth();
  // const user = 
  //   {
  //     id: 1,
  //     name: "Miguel",
  //     email: "miguel@protocolab.com",
  //     role: "Analista",
  //     department: "TI",
  //   }

  return (
    <div className="px-20 pt-10 max-w-7xl mx-auto">
      <TeamHeader />
      <div>
        <UserCard user={user} />
      </div>
    </div>
  );
}

export default TeamFeature;
