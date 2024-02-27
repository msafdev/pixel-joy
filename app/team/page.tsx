// Components
import Breadcrumb from "@/components/shared/breadcrumb";
import PersonCard from "@/components/shared/personcard";

// Fetch
import { getPeople } from "@/hygraph";

// Icons
import { MoveRight } from "lucide-react";

// Libs
import Balancer from "react-wrap-balancer";

const Team = async () => {
  const people = await getPeople();

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex py-4 pad-x">
        <Breadcrumb />
      </div>
      <div className="flex flex-col pad-x pb-4 md:pb-8">
        <h1 className="text-4xl font-medium">
          <Balancer>
            Meet our{" "}
            <MoveRight className="w-10 h-10 inline-block text-gray-500" />{" "}
            lovely team
          </Balancer>
        </h1>

        <p className="text-lg text-gray-500 max-w-[600px] mt-3 mb-6">
          <Balancer>
            We are a team of passionate individuals who love to build and create
            things that matter. We are a team of passionate individuals who love
            to build and create things that matter.
          </Balancer>
        </p>

        {/* Team */}
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-x-3 gap-y-4">
          {people.peopleConnection.edges.map((person, index) => (
            <PersonCard person={person} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Team;
