export async function loadWine(id) {
  const response = await fetch('http://localhost:4000/api/products/' + id);

  if (!response.ok) {
    throw new Response(
      { message: 'Could not fetch details for selected wine.' },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.wine;
  }
}

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
    const products = await response.json();
    console.log(products);
    return products;
  }
}

export function winesLoader() {
  const products = loadWines();
  return products;
}

export async function wineLoader({ params }) {
  const id = params.wineId;

  return {
    wine: loadWine(id),
    wines: loadWines(),
  };
}

/* export async function winesAction({ params, request }) {
    const wineId = params.wineId;
    const response = await fetch('http://localhost:4000/api:products/' + wineId, {
      method: request.method,
    });
  
    if (!response.ok) {
      throw new Response({ message: 'Could not delete product.' }, { status: 500 });
    }
  
    return redirect('/allwines');
  } */
