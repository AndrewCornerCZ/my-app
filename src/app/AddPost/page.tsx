
import React from "react";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AddForm from "@/components/AddForm";

export default async function AddPost() {

  return (
    <><h1 className="text-4xl text-indigo-500 text-left m-[10px]">Add Post</h1>
    <AddForm></AddForm>
    </>
  );
}
