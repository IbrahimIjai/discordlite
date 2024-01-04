import Header from "@/components/layout/Header";
import Heros from "@/views/publicroutes/Heros";
import Features from "@/views/publicroutes/Features";
import Footer from "@/components/layout/Footer";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";

const Home = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  console.log("this is server", server);
  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  if (!server) {
    return <InitialModal profile={profile}/>;
  }
  return (
    <div className="w-full min-h-screen bg-white">
      <Header bg="#404eed" />
      <div></div>
      <Heros />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
