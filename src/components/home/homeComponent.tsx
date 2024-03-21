import axios from "axios";
import { useEffect, useState } from "react";

export const HomeComponent = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/movies").then((response) => {
      const data = response.data
      setMovies(data)
    }).catch((error)=> {
      console.log(`Deu erro aqui o ${error}`)
    } )
  }, [])

  console.log("Ze da manga" + movies)
  return (
    <div className="h-screen flex">
      <aside className="bg-red-900 w-1/6 ">
        <section className="bg-green-300 h-28 mb-3 flex items-center justify-center">
          <h2 className="text-4xl">Hello, User</h2>
        </section>

        <section className="bg-slate-500 h-20 flex-col flex justify-end">
          <button className="bg-white w-28 text-lg text-cyan-400">
            Add Movie
          </button>
        </section>
      </aside>
      <main className="bg-blue-800 w-5/6">
        <div className="h-28 bg-orange-500 relative">
          <section className="bg-white absolute bottom-0 left-0 right-0 ml-5 mr-5 ">
            <h1 className="text-4xl p-2">All Movies</h1>
          </section>
        </div>
        <div>
          {movies.map((movie: any) => 
            (<article className='flex m-2.5' key={movie.id}>
              <div className="w-3/5 m-12">
                <h3 className='text-4xl'>{movie.title}</h3>
                <p className='bg-blue-600 text-xl mb-7'><strong>Data:</strong> {movie.releaseDate}</p>
                <h4 className='text-2xl mb-2'>Resumo:</h4>
                <p className='overflow-y-auto max-h-80 leading-6'>{movie.resume}</p>
              </div>
                {/* <StarComponent rating={movie.note}/> */}
            </article>)
          )}
        </div> 
      </main>
    </div>
  );
};
