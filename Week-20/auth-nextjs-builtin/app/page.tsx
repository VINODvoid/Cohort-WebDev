import { getSession, SessionProvider, signIn, signOut, useSession ,} from "next-auth/react";
import {getServerSession} from "next-auth"

export default async function Home() {
  const session = await getServerSession();

  return (
    <div>
      {JSON.stringify(session)}
    </div>
    // <SessionProvider>
    //   <HomeContent/>
    // </SessionProvider>
  );
}

// function HomeContent()
// {
//   const session = useSession();
//   return (
//     <div className="flex items-center justify-center py-16 min-h-screen">
//       {session.status === "authenticated"?<button onClick={()=>signOut()}>log out</button>:<button onClick={()=>signIn()}>Sign in</button>}
//     </div>
//   );
// }