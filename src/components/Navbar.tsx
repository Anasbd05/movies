"use client";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error:", error.message);
      } else {
        setUser(data.session?.user.user_metadata);
      }
    };

    getSession();
  }, []);
  return (
    <nav className=" py-4 mt-2 px-12 flex items-center justify-between ">
      <h1 className=" text-4xl font-semibold font-header">
        {" "}
        <span className=" text-red-700 ">Movie</span>Mate
      </h1>
      <main className="lg:flex gap-5 hidden">
        <Link href={""} className=" font-medium  ">
          Home
        </Link>
        <Link href={""} className=" font-medium  ">
          About
        </Link>
        <Link href={""} className=" font-medium  ">
          Contact
        </Link>
      </main>
      {user ? (
        <button className=" py-2 px-5 bg-red-700 rounded-lg text-white">
          {user.name}
        </button>
      ) : (
        <Link
          href={"/login"}
          className=" py-2 px-5 bg-red-700 rounded-lg text-white"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
