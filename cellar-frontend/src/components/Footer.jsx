import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-darkgreen text-white text-lg font-bold mx-auto grid w-screen grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
      <div className="mx-auto flex flex-col max-w-7xl justify-between p-6 lg:px-8 lg:gap-x-12 items-start">
        <h2 className="text-4xl">The Cellar</h2>
        <p className="my-4 text-2xl font-normal">
          La plateforme pour les amoureux du vin.
        </p>
        <FontAwesomeIcon icon={faLinkedin} className="fa-2xl" />
        <div className="mt-6 flex flex-col max-w-md gap-x-4">
          <label htmlFor="email-address" className="font-light py-2 ">
            S&apos;inscrire à la newsletter
          </label>
          <div className="flex bg-white rounded-md p-0.5 ">
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Votre email"
              autoComplete="email"
              className="flex-auto bg-white/5 px-2 font-normal text-white placeholder:text-gray-400 "
            />
            <button
              type="submit"
              className="flex rounded-md p-2 text-base font-semibold bg-darkgreen text-white hover:bg-gray-700  focus-visible:outline-gray-700"
            >
              Envoyer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 7.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-x-8 py-12 lg:grid-cols-2 font-normal">
        <Link href="#" className="">
          Accueil
        </Link>
        <Link href="#" className="">
          À boire
        </Link>
        <Link href="#" className="">
          Lieux
        </Link>
        <Link href="#" className="">
          Événements
        </Link>
        <Link href="#" className="">
          Autres
        </Link>
        <Link href="#" className="">
          Contact
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
