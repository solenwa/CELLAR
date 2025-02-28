import { Link, useLoaderData } from 'react-router-dom';

/* const products = [
  {
    id: 1,
    name: "Réserve de l'Aïeul",
    href: '#',
    year: '2017',
    imageSrc:
      'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: "L'Amourvèdre",
    href: '#',
    year: '2015',
    imageSrc:
      'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Le Bon Temps',
    href: '#',
    year: '2023',
    imageSrc:
      'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'X',
    href: '#',
    year: '2023',
    imageSrc:
      'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]; */

function WinesList() {
  const products = useLoaderData();

  if (products.isLoading) {
    return <div>Loading...</div>;
  }

  if (products.isError) {
    return <div>Error loading products.</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product) => (
              <Link
                key={product._id}
                href={`/allwines/${product._id}`}
                className="group"
              >
                <img
                  alt={product.domaine}
                  src={product.image.url}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.cuvee}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.millesime}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default WinesList;
