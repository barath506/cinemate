import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useEffect } from "react";

import { useTitle } from "../hooks/useTitle";
export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(`${title}`);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie, index) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
