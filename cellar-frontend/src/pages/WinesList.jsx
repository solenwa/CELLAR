import { Link, useLoaderData } from 'react-router-dom';

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
                to={`/allwines/${product._id}`}
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
