import { Suspense } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';

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
  const { products } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textalign: 'center' }}>Loading...</p>}>
      <Await resolve={products}>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/allwines/${product.id}`}
                  className="group"
                >
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  />
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.year}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Await>
    </Suspense>
  );
}

export default WinesList;

export async function loadWines() {
  const response = await fetch('http://localhost:4000/api/products');

  if (!response.ok) {
    return new Response(
      { message: 'Could not fetch wines.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.products;
  }
}

export function winesLoader() {
  return {
    events: loadWines(),
  };
}
