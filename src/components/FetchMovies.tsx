"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const FetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        url: "https://imdb236.p.rapidapi.com/api/imdb/top250-movies",
        headers: {
          "x-rapidapi-key":
            "f65522c5bcmshea97c260f086c20p10e6dcjsn6f02a95c684a",
          "x-rapidapi-host": "imdb236.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p className="py-10 px-5 mt-10">Loading movies...</p>;

  return (
    <section className="py-10 px-5 mt-10">
      <div className="flex items-center w-full justify-between my-5 ">
        <h1 className="text-2xl font-bold mb-4">Top 250 Movies</h1>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className=" text-sm font-semibold  border rounded-lg py-2 px-3 w-2/4 "
          placeholder="search..."
        />
      </div>
      <ul className=" grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        {movies
          .filter((item) =>
            item.originalTitle.toLowerCase().includes(search.toLowerCase())
          )
          .map((movie, index) => (
            <li key={index} className="rounded shadow-sm">
              <Image
                alt=""
                className=" w-full h-80 mb-2 "
                width={80}
                height={80}
                src={movie.primaryImage}
              />
              <main className=" px-2 mb-2 ">
                <div className=" flex items-center justify-between ">
                  <p className="font-semibold text-sm">{movie.primaryTitle}</p>
                  <p className=" text-sm">{movie.averageRating}⭐</p>
                </div>
                <div className="flex gap-1 mt-1">
                  <span className=" font-bold text-sm ">Release Date: </span>
                  <p className="text-neutral-800 text-sm">
                    {movie.releaseDate}
                  </p>
                </div>
              </main>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default FetchMovies;
