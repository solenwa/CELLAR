import { Form, Link, useActionData } from 'react-router-dom';

function Signinpage() {
  const data = useActionData();

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="The Cellar"
            src="/src/assets/logo-highres.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Se connecter
          </h2>
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
          {data && data.message && <p>{data.message}</p>}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form method="post" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Adresse email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-midnightgreen sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Mot de passe
                </label>
                <div className="text-sm">
                  <Link
                    to="#"
                    className="font-semibold text-teal hover:text-midnightgreen"
                  >
                    Mot de passe oublié?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-midnightgreen sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button className="flex w-full justify-center rounded-md bg-teal px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-midnightgreen focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnightgreen">
                Se connecter
              </button>
            </div>
          </Form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Pas de compte?{' '}
            <Link
              to="/signup"
              className="font-semibold text-teal hover:text-midnightgreen"
            >
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signinpage;
