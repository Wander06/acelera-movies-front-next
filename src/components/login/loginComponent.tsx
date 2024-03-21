import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

export const LoginComponent = ({
  name = "",
  description = "",
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className="h-screen flex">
      <div className="w-2/5 flex-1 flex items-center justify-center bg-gradient-to-b from-blue-500 to-green-300 ">
        <div className="w-4/5 h-4/5 flex flex-col space-y-30">
          <span className="h-1/4 max-h-full ">
            <h1 className="text-center text-6xl font-bold text-white" >Acelera Movies</h1>
          </span>
        <div className=" bg-transparent p-8 border-white rounded-lg shadow-2xl max-w-full max-h-full">
          <h2 className="text-4xl font-bold leading-9 tracking-tight text-white">
            Entrar
          </h2>

          <form className="mt-6 space-y-6" action="#" method="POST">
            <div>
            <FontAwesomeIcon aria-label="Ícone de e-mail" icon={faUser} className='translate-y-14 translate-x-3 text-gray-500' />
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                E-mail:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full pl-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-2">
            <FontAwesomeIcon aria-label="Ícone de senha" icon={faKey} className='translate-y-14 translate-x-3 text-gray-500' />
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                Senha:
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full pl-10 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus:outline-none focus:ring focus:border-indigo-700"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm">
            Esqueceu sua senha?{" "}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Problema seu :)!
            </a>
          </p>
        </div>
        </div>
      </div>

      <div className="w-3/5">
        <img
          className="w-full h-full object-cover"
          src="https://i.postimg.cc/KzwmfsWk/movie.jpg"
          alt="imagem de varios filmes"
        />
      </div>
    </div>
  );
};
