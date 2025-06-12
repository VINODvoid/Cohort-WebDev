import { Button } from "@/components/ui/button";
import { NotebookPenIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-6  ">
      <div className=" flex justify-center items-center">
        <NotebookPenIcon size={30}/> 
      <p className="text-2xl  m-2 mr-4 font-bold">Todo App</p>
      </div>
      <div className="flex justify-center items-center m-2 gap-4 p-4">
        <Button asChild className="p-2 m-2" variant={"outline"}>
          <Link href="/signup" >Sign up</Link>
        </Button>
        <Button asChild className="p-2 m-2" variant={"outline"}>
          <Link href="/signin">Sign in</Link>
        </Button>
      </div>
    </div>
  );
}
