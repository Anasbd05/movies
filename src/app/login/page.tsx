"use client";
import React from "react";
import { supabase } from "@/lib/supabaseClient";

const page = () => {
  const loginWithGoogle = async () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <section className=" h-screen w-full flex items-center justify-center ">
      <main className=" w-2/5 p-5 bg-gray-50 shadow-md rounded-xl ">
        <h1 className=" text-3xl font-header font-semibold text-center my-5 ">
          Login
        </h1>
        <button
          onClick={loginWithGoogle}
          className=" bg-black w-full rounded-lg py-3 text-white font-semibold   "
        >
          Continue with google
        </button>
      </main>
    </section>
  );
};

export default page;
