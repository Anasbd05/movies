import FetchMovies from "@/components/FetchMovies";
import Homepage from "@/components/Home";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Homepage />
      <FetchMovies />
    </section>
  );
}
