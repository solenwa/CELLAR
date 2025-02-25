import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="mx-auto text-center ">
      <div className="bg-radial-[at_20%_30%] to-50% from-[#275D65] to-darkgreen h-fit p-20 text-white font-bold ">
        <h1 className="text-6xl">The Cellar :</h1>
        <h2 className="text-6xl pb-5 ">
          La plateforme de gestion de votre cave à vin.
        </h2>
        <p className="text-xl pb-5">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
        </p>
        <button
          type="button"
          className="bg-teal border-2 border-teal p-2 text-white rounded-2xl mr-5"
        >
          <a href="#" className="text-base/6 font-semibold">
            Commencer
          </a>
        </button>
        <button
          type="button"
          className="bg-transparent  p-2 text-white rounded-2xl"
        >
          <a href="#" className="text-base/6 font-semibold">
            En savoir plus <span aria-hidden="true">&rarr;</span>
          </a>
        </button>
      </div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <Link to="/allwines">
              <h2 className="text-2xl font-bold text-gray-900">À boire</h2>
            </Link>

            <div className="mt-6 space-y-12 lg:grid lg:grid-flow-col lg:grid-rows-2 lg:grid-cols-2 lg:gap-6 lg:space-y-0">
              <div className="group relative lg:row-span-2 text-left">
                <img
                  src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg"
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <p className="-mt-15 pl-6 text-base font-semibold text-white">
                  Les vins rouges
                </p>
                <a href="#" className="pl-6 text-sm text-white">
                  <span className="absolute inset-0"></span>
                  Voir plus <span aria-hidden="true">&rarr;</span>
                </a>
              </div>

              <div className="group relative text-left">
                <img
                  src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg"
                  alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 "
                />
                <p className="-mt-15 pl-6 text-base font-semibold text-white">
                  Les vins blancs
                </p>
                <a href="#" className="pl-6 text-sm text-white">
                  <span className="absolute inset-0"></span>
                  Voir plus <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <div className="group relative text-left">
                <img
                  src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg"
                  alt="Collection of four insulated travel bottles on wooden shelf."
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 "
                />

                <p className="-mt-15 pl-6 text-base font-semibold text-white">
                  Les pétillants
                </p>
                <a href="#" className="pl-6 text-sm text-white">
                  <span className="absolute inset-0"></span>
                  Voir plus <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
